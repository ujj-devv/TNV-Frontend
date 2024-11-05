import { ButtonType } from "../../ui/Button/button.types"

export type ButtonGroupType = {
    id: number,
    text: string,
    type: ButtonType.PRIMARY | ButtonType.SECONDARY
  }