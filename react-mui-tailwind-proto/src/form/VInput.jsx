import { InputAdornment, TextField, Icon } from "@mui/material";
import React from "react";

const VInput = (props) => {

  const {
    classes,
    label,
    value,
    setValue,
    rows,
    variant,
    startIcon,
    endIcon
  } = props;

  return <>
    <TextField
      className={classes}
      label={label}
      value={value}
      onChange={e => setValue(e.target.value)}
      multiline={rows && rows > 1 ? true : false}
      rows={rows && rows > 1 ? rows : 1}
      variant={variant}
      InputProps={
        startIcon ? {
          startAdornment: (
            <InputAdornment position="start">
              <Icon>{startIcon}</Icon>
            </InputAdornment>
          )
        } : endIcon ? {
          endAdornment: (
            <InputAdornment position="start">
              <Icon>{endIcon}</Icon>
            </InputAdornment>
          )
        } : {}
      }
    />
  </>;
};

VInput.defaultProps = {
  classes: '',
  value: '',
  setValue: () => { },
  rows: 1,
  variant: 'outlined', // filled, standard
  startIcon: null,
  endIcon: null
};


export default VInput;