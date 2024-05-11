import { FC } from "react";
import { Header } from "../../layout/header";

import styles from "./styles.module.scss";
import { Input } from "@mui/material";
import { Profile } from "../../components/profile";
import DefaultImage from "../../assets/default-image.jpg";
import { UserPreview } from "../../components/user-preview";

export const UsersPage: FC<any> = ({ tabs, role }) => {
    const users = [
        { avatar: DefaultImage },
        { avatar: DefaultImage },
        { avatar: DefaultImage },
    ];
    return (
        <div className={styles.users}>
            <div className={styles.users_wrapper}>
                <Header tabs={tabs} />
                <div className={styles.users_content}>
                    <div className={styles.users_aside}>
                        <Input />
                        <ul className={styles.users_list}>
                            {!!users &&
                                users.length !== 0 &&
                                users.map(({ avatar }) => (
                                    <li className={styles.users_item}>
                                        <UserPreview image={avatar} />
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <Profile />
                </div>
            </div>
        </div>
    );
};
