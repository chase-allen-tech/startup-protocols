import { LoadingButton } from "@mui/lab";
import { Icon, IconButton } from "@mui/material";
import React from "react";

const VButton = (props) => {

  const {
    classes,
    startIcon,
    endIcon,
    text,
    onClick,
    variant,
    iconButton,
    iconOnly,
    color,
    disabled,
    loading
  } = props;

  return <>
    {
      iconButton && <LoadingButton
        variant={variant}
        className={`${classes} p-2 min-w-0`}
        color={color}
        onClick={onClick}
        disabled={disabled}
        loading={loading}
      // disableElevation
      >
        <Icon>{startIcon}</Icon>
      </LoadingButton>
    }
    {
      iconOnly && <IconButton
        variant={variant}
        className={`${classes} p-2 min-w-0`}
        color={color}
        onClick={onClick}
        disabled={disabled}
      >
        <Icon>{startIcon}</Icon>
      </IconButton>
    }
    {
      !iconButton && !iconOnly && <LoadingButton
        variant={variant}
        className={classes}
        color={color}
        startIcon={startIcon ? <Icon>{startIcon}</Icon> : null}
        endIcon={endIcon ? <Icon>{endIcon}</Icon> : null}
        onClick={onClick}
        disabled={disabled}
        loading={loading}
        loadingPosition="start"
      >
        {text}
      </LoadingButton>
    }
  </>;
};

VButton.defaultProps = {
  classes: '',
  startIcon: null,
  endIcon: null,
  text: '',
  onClick: () => { },
  variant: 'contained',
  iconButton: false,
  iconOnly: false,
  color: 'primary',
  disabled: false,
  loading: false
};

export default VButton;