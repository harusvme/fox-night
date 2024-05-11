import { useState, useRef, FC, SyntheticEvent } from "react";
import DefaultImage from "../../assets/default-image.jpg";
import UploadingAnimation from "../../assets/uploading.gif";
import classNames from "classnames";
import { ImageUploaderProps } from "./types";

import styles from "./styles.module.scss";

export const ImageUploader: FC<ImageUploaderProps> = ({ className }) => {
    const [avatarURL, setAvatarURL] = useState(DefaultImage);
    const fileUploadRef = useRef<HTMLInputElement | null>(null);
    const handleImageUpload = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!!fileUploadRef.current) {
            fileUploadRef.current.click();
        }
    };

    const uploadImageDisplay = async () => {
        try {
            if (
                !!fileUploadRef.current?.files &&
                fileUploadRef.current?.files.length !== 0
            ) {
                setAvatarURL(UploadingAnimation);

                const uploadedFile = fileUploadRef.current.files[0];

                const formData = new FormData();

                formData.append("file", uploadedFile);
                const response = await fetch(
                    "https://api.escuelajs.co/api/v1/files/upload",
                    {
                        method: "post",
                        body: formData,
                    }
                );

                if (response.status === 201) {
                    const data = await response.json();
                    console.log(data);
                    setAvatarURL(data?.location);
                }
            }
        } catch (error) {
            console.log(error);
            setAvatarURL(DefaultImage);
        }
    };

    return (
        <div className={classNames(className, styles.image)}>
            <form
                id="form"
                encType="multipart/form-data"
                className={styles.image_form}
            >
                <img
                    onClick={handleImageUpload}
                    src={avatarURL}
                    alt="Avatar"
                    className={styles.image_avatar}
                />
                <input
                    type="file"
                    id="file"
                    ref={fileUploadRef}
                    onChange={uploadImageDisplay}
                    hidden
                />
            </form>
        </div>
    );
};
