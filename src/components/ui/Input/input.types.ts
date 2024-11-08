import { InputType } from "zlib";
import { InputVariant } from "./input.enums";

export type InputPropTypes = {
  id: string;
  label: string;
  variant: InputVariant;
  disabled: boolean;
  value: string;
  type: InputType;
  required?: boolean;
  name: string;
  isMultiline?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  isError?:boolean,
  helperText?:string
  placeholder:string
};
