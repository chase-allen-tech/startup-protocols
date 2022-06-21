import { Button } from "@mui/material";
import React, { useState } from "react";
import { SketchPicker } from "react-color";

const VColorPicker = (props) => {

  const { color, setColor, classes } = props;

  const [show, setShow] = useState(false);

  const onChange = (val) => {
    setColor(val.hex);
  };

  return <>

    <Button
      className={classes}
      variant="contained"
      onClick={() => setShow(true)}
      style={{ backgroundColor: color }}
    >
      {color}
    </Button>

    {
      show &&
      <div className="absolute z-10">
        <div className="fixed top-0 right-0 left-0 bottom-0" onClick={() => setShow(false)} />
        <SketchPicker
          color={color}
          onChange={onChange}
          disableAlpha={true}
        />
      </div>
    }
  </>;
};

VColorPicker.defaultProps = {
  classes: '',
  color: '#DBCD19',
  setColor: () => { }
};

export default VColorPicker;