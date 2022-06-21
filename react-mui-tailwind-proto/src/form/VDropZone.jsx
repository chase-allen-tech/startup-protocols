import { Button, IconButton, Input, Icon, CircularProgress } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";

const VDropZone = (props) => {

  const {
    classes,
    url,
    setUrl,
    children,
    accept,
    showPreview,
  } = props;


  const [loading, setLoading] = useState(false);

  const processFile = (file) => {
    setUrl(URL.createObjectURL(file));

    // S3 upload
    setLoading(true);
    // uploadFile(sendFile, s3Config)
    //   .then(data => setUrl(data.location))
    //   .catch(err => setUrl(null))
    //   .finally(() => setLoading(false));

    setTimeout(() => setLoading(false), 1000);
  };

  const onRemoveClick = (e) => {
    e.stopPropagation();
    setUrl('');

    // Delete S3 bucket
  };

  // Dropzone functions
  const onDrop = useCallback((acceptedFiles) => {
    if (!acceptedFiles.length) return;
    const inputFile = acceptedFiles[0];
    processFile(inputFile);
  });

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: { [accept]: [] },
    maxFiles: 1
  });

  const style = useMemo(() => ({
    ...(isFocused ? { borderColor: '#2196F3' } : {}),
    ...(isDragAccept ? { borderColor: '#00e676' } : {}),
    ...(isDragReject ? { borderColor: '#FF1744' } : {})
  }), [isFocused, isDragAccept, isDragReject]);

  return <>
    <div {...getRootProps({ style })} className={`${classes} border-2 border-gray-400 border-dashed flex justify-center items-center rounded-md cursor-pointer relative`}>
      {url && showPreview &&
        <>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center" style={{ zIndex: -1 }}>
            <img src={url} alt="" className="h-full" />
          </div>
          <IconButton className="absolute top-0 right-0" onClick={onRemoveClick}>
            <Icon>cancel</Icon>
          </IconButton>
        </>
      }
      {
        loading &&
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-blue-100 bg-opacity-90">
          <CircularProgress color="info" size={80} />
        </div>
      }
      <input {...getInputProps()} accept={accept} />
      {url ? <></> : children}
    </div>
  </>;
};

VDropZone.defaultProps = {
  classes: '',
  url: '',
  setUrl: () => { },
  accept: 'image/*', // 'image/png'
  showPreview: true
};

export default VDropZone;