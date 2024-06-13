import { useEffect, FC, useState } from "react";
import { Header } from "../../layout/header";
import styles from "./styles.module.scss";
import { Input } from "@mui/material";
import { Profile } from "../../components/profile";
import { UserPreview } from "../../components/user-preview";
import { getUsers, getUser } from "../../api/api.users";
import { useQuery } from "react-query";
import UserAttributes from '../../api/types'

export const UsersPage: FC<any> = ({ tabs, role }) => {
    const { data: users } = useQuery("users", getUsers);

    const [currentUser, setCurrentUser] = useState<UserAttributes>({});

    const handleClick = async (id: number) => {
        const { data: user } = await getUser(id);
        setCurrentUser({ ...user.data });
    }

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
                                        key={id}  // Используем key вместо id
                                        className={styles.users_item}
                                        onClick={() => handleClick(id)}
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
                    <Profile
                        id={currentUser.id}
                        email={currentUser.email}
                        phoneNumber={currentUser.phoneNumber}
                        telegram={currentUser.telegram}
                        name={currentUser.name}
                        startWork={currentUser.startWork} 
                        birthday={currentUser.birthday} 
                        city={currentUser.city} 
                        role={role} />
                </div>
            </div>
        </div>
    );
};