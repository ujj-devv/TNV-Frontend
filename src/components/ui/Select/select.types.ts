import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

export type SelectPropType = {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void
  options: SelectOptionsType[];
  name:string, 
  customClass?:string,
  isDisabled?:boolean
};

export type SelectOptionsType = {
  value: string;
  name: string;
};

// It means handleChange should be of the form:

// const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
//     setSelectedValue(event.target.value);
//   };
