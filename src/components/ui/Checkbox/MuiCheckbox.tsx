import { Checkbox, FormControlLabel, FormHelperText, FormControl } from "@mui/material";
import { CheckboxPropType } from "./checkbox.types";

const MuiCheckbox = ({
    label, isDisabled, labelPlacement, handleChange, isChecked,
    isIndeterminate, isRequired, error, errorMessage, defaultChecked
}: CheckboxPropType) => {
    return (
        <FormControl required={isRequired} error={true} component="fieldset">
            <FormControlLabel
                control={
                    <Checkbox
                        defaultChecked={defaultChecked}
                        checked={isChecked}
                        indeterminate={isIndeterminate}
                        disabled={isDisabled}
                        onChange={handleChange}
                        sx={{
                            color: error ? "#D32F2F" : "#32736A",
                            "&.Mui-checked": {
                                color: error ? "#D32F2F" : "#32736A",
                            },
                            "&.MuiCheckbox-indeterminate": {
                                color: error ? "#D32F2F" : "#32736A",
                            }
                        }}
                    />
                }
                label={label}
                labelPlacement={labelPlacement}
            />
            {error && errorMessage && (
                <FormHelperText >{errorMessage}</FormHelperText>
            )}
        </FormControl>
    );
}

export default MuiCheckbox;
