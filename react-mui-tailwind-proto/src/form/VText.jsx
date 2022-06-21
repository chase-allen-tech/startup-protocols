import { Icon } from "@mui/material";
import React from "react";

const VText = (props) => {

  const { color, size, inline, children, b, icon } = props;

  return <>
    {
      inline ?
        <span
          style={{
            fontSize: size,
            fontFamily: b ? 'Poppins' : 'Proxima Nova',
            color: color ? color : 'inherite'
          }}
        >
          {icon && <Icon>${icon}</Icon>}
          {children}
        </span>
        :
        <div
          style={{
            fontSize: size,
            fontFamily: b ? 'Poppins' : 'Proxima Nova',
            color: color ? color : 'inherite'
          }}
          className="flex items-center"
        >
          {icon && <Icon className="mr-1" style={{ color: color }}>{icon}</Icon>}
          {children}
        </div>
    }
  </>;
};

VText.defaultProps = {
  size: 16,
  inline: false,
  b: false,
  icon: null,
};

export default VText;