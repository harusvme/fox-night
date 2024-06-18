import { FC } from "react";

import styles from "./styles.module.scss";
import ImageUploader from "../../components/image-uploader";
import { Editable } from "../editable";
import { Typography, Button } from "@mui/material";
import { ProfileProps } from "./types"
import { deleteUser } from "../../api/api.users";

export const Profile: FC<ProfileProps> = ({ role, 
    id,
    name,
    birthday,
    startWork,
    telegram,
    city,
    email,
    phoneNumber,
    photo,
}) => {
    const hrEdit = role === "hr" || role === "admin";
    const userEdit = role === "hr" || role === "admin" || role === "employee";

    const handleDelete = (id: number) => {
        deleteUser(id);
    }
    return (
        <div className={styles.profile}>
            <div className={styles.profile_head}>
                <ImageUploader className={styles.profile_image} photo={photo} id={id}></ImageUploader>
                <div className={styles.profile_user}>
                    <Editable id={id} initialValue={name} type="text" field={'name'}/>
                    <Typography>работает с {startWork}</Typography>
                </div>
            </div>
            <div className={styles.prifle_fields}>
                <Editable
                    id={id}
                    initialValue={telegram}
                    type="text"
                    label={"телеграм"}
                    editable={userEdit}
                    field={'telegram'}
                />
                <Editable
                    id={id}
                    initialValue={email}
                    type="text"
                    label={"почта"}
                    editable={hrEdit}
                    field={'email'}
                />
                <Editable
                    id={id}
                    initialValue={phoneNumber}
                    type="text"
                    label={"номер"}
                    editable={userEdit}
                    field={'phoneNumber'}
                />
                <Editable
                    id={id}
                    initialValue={birthday}
                    type="date"
                    label={"день рождения"}
                    editable={hrEdit}
                    field={'birthday'}
                />
                <Editable
                    id={id}
                    initialValue={city}
                    type="text"
                    label={"город"}
                    editable={hrEdit}
                    field={'city'}
                />
            </div>
            {role === 'admin' && <Button onClick={()=> handleDelete(id)}>{'Удалить к чертям собачьим'}</Button>}
        </div>
    );
};
