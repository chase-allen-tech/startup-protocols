import { Checkbox, FormControlLabel, Icon } from "@mui/material";
import React from "react";

const VCheck = (props) => {

  const { checked, setChecked, children, color, icon, checkedIcon } = props;

  return <>
    {
      icon && checkedIcon ?
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
              name={children}
              color={color}
              icon={<Icon>{icon}</Icon>}
              checkedIcon={<Icon>{checkedIcon}</Icon>}
            />
          }
          label={children}
        />
        :
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              color={color}
              onChange={() => setChecked(!checked)}
              name={children}
            />
          }
          label={children}
        />
    }

  </>;
};

VCheck.defaultProps = {
  checked: false,
  setChecked: () => { },
  children: '',
  color: 'primary',
  icon: '',
  checkedIcon: ''
};

export default VCheck;