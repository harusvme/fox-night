import { FC, useState, useEffect } from "react";
import EdiText from "react-editext";
import styles from "./styles.module.scss";
import { updateUser } from "../../api/api.users";

import { EditableProps } from "./types";
import { Typography } from "@mui/material";

export const Editable: FC<EditableProps> = ({
    id,
    initialValue,
    type,
    label,
    editable = false,
    className,
    field,
}) => {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        setValue(initialValue)
    },[initialValue])
    const Months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ];

    const handleSave = (val: string) => {
        if (type === "date") {
            const currentDate = new Date(val);
            val = `${currentDate.getDate()} ${Months[currentDate.getMonth()]}`;
            if (currentDate.toString() !== "Invalid Date") {
                setValue(val);
                updateUser(id, field, val)
            }
        } else {
            setValue(val);
            updateUser(id, field, val)
        }
    };

    return (
        <div className={styles.editable}>
            {!!label && (
                <Typography className={styles.editable_text}>
                    {label}
                </Typography>
            )}
            <EdiText
                canEdit={editable}
                type={type}
                value={value}
                onSave={handleSave}
                editOnViewClick={true}
                editButtonClassName={styles.editable_button}
                viewContainerClassName={className}
            />
        </div>
    );
};
