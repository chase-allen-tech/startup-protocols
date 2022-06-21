import { Button, Input } from "@mui/material";
import React, { useState } from "react";

const VFileInput = (props) => {

  const {
    classes,
    url,
    setUrl,
    accept,
    children
  } = props;

  const [loading, setLoading] = useState(false);

  const onFileInputChange = (e) => {
    const inputFile = e.target.files[0];
    if (!inputFile) return;
    processFile(inputFile);
  };

  const processFile = (file) => {
    setUrl(URL.createObjectURL(file));

    // const reader = new FileReader();
    // reader.onabort = () => console.log('[File reading was aborted]');
    // reader.onerror = () => console.log('[File reading has failed]');
    // reader.onload = () => {
    //   const binaryStr = reader.result;
    //   console.log('[binary str]', binaryStr);
    // };
    // reader.readAsArrayBuffer(inputFile);

    // S3 upload
    setLoading(true);
    // uploadFile(sendFile, s3Config)
    //   .then(data => setUrl(data.location))
    //   .catch(err => setUrl(null))
    //   .finally(() => setLoading(false));
  };

  return <>

    <label htmlFor="contained-button-file">
      <Input accept={accept} id="contained-button-file" multiple type="file" className="hidden"
        onChange={e => onFileInputChange(e)}
      />
      <Button variant="contained" className={classes} component="span" disabled={loading}>
        {children}
      </Button>
    </label>
  </>;
};

VFileInput.defaultProps = {
  classes: '',
  url: '',
  setUrl: () => { },
  accept: 'image/*'
};

export default VFileInput;