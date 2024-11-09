import { ReactNode } from "react";
import { CheckboxLabelPlacement } from "./checkbox.enum";

export type CheckboxPropType = {
    label?:ReactNode
    isDisabled?:boolean,
    labelPlacement?:CheckboxLabelPlacement
    isChecked:boolean
    isIndeterminate?:boolean
    isRequired?:boolean
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorMessage?: string;
    defaultChecked?:boolean
}