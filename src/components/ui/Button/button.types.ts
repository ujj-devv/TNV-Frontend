import { ReactNode } from "react"

export enum ButtonType{
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

export type ButtonPropTypes = {
    text:string,
    type:ButtonType,
    icon?:ReactNode
}