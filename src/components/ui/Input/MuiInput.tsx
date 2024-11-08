import { TextField } from "@mui/material";
import { InputPropTypes } from "./input.types";

const MuiInput = ({
    label, variant, disabled, id, value,
    type, required, name, isMultiline, onChange,
    defaultValue, isError, placeholder, helperText
}: InputPropTypes) => {
    return (
        <TextField
            id={id}
            label={label}
            variant={variant}
            disabled={disabled}
            value={value}
            type={type as string}
            required={required}
            name={name}
            multiline={isMultiline}
            onChange={onChange}
            defaultValue={defaultValue}
            error={isError}
            helperText={helperText}
            placeholder={placeholder}
            sx={{
                "& .MuiInputLabel-root": { color: "#32736A" },  // Default label color
                "& .MuiInputLabel-root.Mui-focused": { color: "#32736A" },  // Focused label color
                "& .MuiInputLabel-root.Mui-error": { color: "#D32F2F" },   // Label color when in error state
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "gray"  // Default border color
                    },
                    "&:hover fieldset": {
                        borderColor: "black"  // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: disabled ? "gray" : "#32736A"  // Border color on focus if not disabled
                    },
                    "&.Mui-disabled fieldset": {
                        borderColor: "lightgray" // Border color when disabled
                    },
                    "&.Mui-error fieldset": {
                        borderColor: "#D32F2F" // Border color when in error state
                    }
                },
                "& .MuiFormHelperText-root.Mui-error": {
                    color: "#D32F2F"  // Helper text color in error state
                },
            }}
        />
    );
};

export default MuiInput;
