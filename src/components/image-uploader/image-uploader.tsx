import { useState, useRef, FC, SyntheticEvent, useEffect } from "react";
import DefaultImage from "../../assets/default-image.jpg";
import UploadingAnimation from "../../assets/uploading.gif";
import classNames from "classnames";
import { ImageUploaderProps } from "./types";

import styles from "./styles.module.scss";
import { updateUser } from "../../api/api.users";

export const ImageUploader: FC<ImageUploaderProps> = ({ className, id, photo }) => {
    const [avatarURL, setAvatarURL] = useState(DefaultImage);
    useEffect(()=> {
        if(photo) setAvatarURL(photo)
    },[])
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
                const response = !!id ? await updateUser(id, 'photo', uploadedFile) : await fetch(
                    "https://api.escuelajs.co/api/v1/files/upload",
                    {
                        method: "post",
                        body: formData,
                    }
                );


                if (response instanceof Response) {
                    if (response.status === 201) {
                        const data = await response.json();
                        setAvatarURL(data?.location);
                    }
                }
                else {
                    if (response.data.result === true) {
                        const data = await response.data.data;
                        setAvatarURL(data.photo);
                    }
                }
                
            }
        } catch (error) {
            console.log(error);
            !!photo ? setAvatarURL(photo) : setAvatarURL(DefaultImage);
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
