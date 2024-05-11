import { EdiTextType } from "react-editext";

export type EditableProps = {
    initialValue: string;
    type: EdiTextType;
    label?: string;
    editable?: boolean;
    className?: string;
};
