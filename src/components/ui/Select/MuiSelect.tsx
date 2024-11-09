import { SelectPropType } from "./select.types";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const MuiSelect = ({ label, value, onChange, options, name, customClass, isDisabled }: SelectPropType) => {
  return (
    <FormControl
      fullWidth
      variant="outlined"
      sx={{
        "& .MuiInputLabel-root.Mui-focused": { color: "#32736A" }
      }}>
      <InputLabel
        id={`${label}-label`}
      >
        {label}
      </InputLabel>
      <Select
        className={customClass}
        labelId={`${label}-label`}
        id={label}
        value={value}
        label={label}
        onChange={onChange}
        name={name}
        disabled={isDisabled}
        sx={{
          "& .MuiSelect-select": {
            color: "#32736A",        // Changes the selected text color
            backgroundColor: "#f0f0f0" // Changes background of select
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "" // Changes border color
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#32736A" // Border color when focused
          },
          // "& .MuiSelect-icon": {
          //   color: "red" // Changes the icon (dropdown arrow) color
          // }
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MuiSelect;
