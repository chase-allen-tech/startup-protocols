import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const VSelect = (props) => {

  const { option, setOption, label, classes, items, variant } = props;

  return <>
    {
      items.length > 0 &&
      <FormControl className={classes} variant={variant}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label={label}
          onChange={e => setOption(e.target.value)}
        >
          {
            items.map(v => <MenuItem key={v.value} value={v.value}>{v.label}</MenuItem>)
          }
        </Select>
      </FormControl>
    }

  </>;
};

VSelect.defaultProps = {
  classes: '',
  option: '',
  setOption: () => { },
  items: [],
  label: '',
  variant: 'outlined' // filled, standard
};

export default VSelect;