import { FC } from "react";

import styles from "./styles.module.scss";
import ImageUploader from "../../components/image-uploader";
import { Editable } from "../editable";
import { Typography } from "@mui/material";

export const Profile: FC<any> = ({ role }) => {
    const hrEdit = role === "hr";
    const userEdit = role === "hr" || role === "user";
    return (
        <div className={styles.profile}>
            <div className={styles.profile_head}>
                <ImageUploader className={styles.profile_image}></ImageUploader>
                <div className={styles.profile_head_info}>
                    <Editable initialValue="Иванов Иван Иванович" type="text" />
                    <Typography>В компании с 1 января</Typography>
                </div>
            </div>
            <div className={styles.prifle_fields}>
                <Editable
                    initialValue="test"
                    type="text"
                    label={"телеграм"}
                    editable={userEdit}
                />
                <Editable
                    initialValue="test"
                    type="text"
                    label={"почта"}
                    editable={hrEdit}
                />
                <Editable
                    initialValue="test"
                    type="text"
                    label={"скайп"}
                    editable={userEdit}
                />
                <Editable
                    initialValue="1 мая"
                    type="date"
                    label={"день рождения"}
                    editable={hrEdit}
                />
                <Editable
                    initialValue="test"
                    type="text"
                    label={"грейд"}
                    editable={hrEdit}
                />
            </div>
        </div>
    );
};
