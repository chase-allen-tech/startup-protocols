import React from "react";

const VImage = (props) => {

  const {
    classes,
    src,
    error,
    width,
    height
  } = props;

  return <>
    <img
      className={classes}
      src={src}
      alt=''
      width={width}
      height={height}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        if (error === 'user') currentTarget.src = '/assets/avatar.png';
        else if (error === 'course') currentTarget.src = '/assets/course.png';
        else currentTarget.style.display = 'none';
      }} />
  </>;
};

VImage.defaultProps = {
  classes: '',
  src: "",
  error: '', // user | course
  width: '0px',
  height: '0px'
};

export default VImage;