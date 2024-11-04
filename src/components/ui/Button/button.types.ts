import { ReactNode, MouseEvent } from "react"

export enum ButtonType{
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

export type ButtonPropTypes = {
    text: string;
    type: ButtonType;
    icon?: ReactNode;
    customStyles?: string;
    isActive?: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};
