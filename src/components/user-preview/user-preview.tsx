import { FC } from "react";

import styles from "./styles.module.scss";
import { Typography } from "@mui/material";
import classNames from "classnames";
import { UserPreviewProps } from "./types";

export const UserPreview: FC<UserPreviewProps> = ({
    image,
    text,
    className,
    id,
}) => {
    return (
        <div className={classNames(className, styles.user)}>
            <img src={image} alt="Avatar" className={styles.user_avatar} />
            {!!text && (
                <Typography className={styles.user_text}>{text}</Typography>
            )}
        </div>
    );
};
