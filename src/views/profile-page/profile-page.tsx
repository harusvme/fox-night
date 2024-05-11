import { FC } from "react";
import { Header } from "../../layout/header";

import styles from "./styles.module.scss";
import { Profile } from "../../components/profile";

export const ProfilePage: FC<any> = ({ tabs, role }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile_wrapper}>
                <Header tabs={tabs} />
                <div className={styles.profile_content}>
                    <Profile role={role} />
                </div>
            </div>
        </div>
    );
};
