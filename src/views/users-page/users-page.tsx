import { FC } from "react";
import { Header } from "../../layout/header";

import styles from "./styles.module.scss";
import { Input } from "@mui/material";
import { Profile } from "../../components/profile";
import { UserPreview } from "../../components/user-preview";
import { getUsers } from "../../api/api.users";
import { useQuery } from "react-query";

export const UsersPage: FC<any> = ({ tabs, role }) => {
    const { data: users } = useQuery("users", getUsers);
    return (
        <div className={styles.users}>
            <div className={styles.users_wrapper}>
                <Header tabs={tabs} />
                <div className={styles.users_content}>
                    <div className={styles.users_aside}>
                        <Input />
                        <ul className={styles.users_list}>
                            {!!users &&
                                users.data.data.length !== 0 &&
                                users.data.data.map(({ photo, name, id }) => (
                                    <li
                                        id={id.toString()}
                                        className={styles.users_item}
                                    >
                                        <UserPreview
                                            image={photo}
                                            text={name}
                                            id={id.toString()}
                                        />
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
