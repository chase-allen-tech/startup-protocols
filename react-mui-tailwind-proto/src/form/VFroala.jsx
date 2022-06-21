import React, { useMemo } from "react";
import FroalaEditor from 'react-froala-wysiwyg';

import 'froala-editor/css/froala_editor.pkgd.min.css';
import "froala-editor/js/froala_editor.pkgd.min";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min";
import "froala-editor/js/plugins/colors.min";

const VFroala = (props) => {

  const { model, setModel, fileUpload, classes, maxCount } = props;

  const onKeyDownHandler = (evt) => {
    window.isEnterPressed = evt.keyCode === 13 && !evt.altKey && !evt.shiftKey && !evt.ctrlKey ? true : false;
  };

  const froalaConfig = useMemo(() => ({
    key: process.env.REACT_APP_FROALA_KEY,
    shortcutsEnabled: [""],
    shortcutsHint: false,
    attribution: false,
    iframe: false,
    quickInsertEnabled: false,
    imageUpload: fileUpload,
    fileUpload: fileUpload,
    charCounterCount: true,
    ...(maxCount ? { charCounterMax: maxCount } : {}),
    events: {
      keydown: onKeyDownHandler
    },
    toolbarButtons: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
      },
      'moreParagraph': {
        'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
      },
      'moreRich': {
        'buttons': ['insertImage', 'insertHR']
      },
      'moreMisc': {
        'buttons': ['undo', 'redo', 'fullscreen', 'html'],
        'align': 'right',
        'buttonsVisible': 4
      }
    },
    // tooltips: false,
    placeholderText: "Type...",
    // colorsBackground: [
    //   '#15E67F', '#E3DE8C', '#D8A076', '#D83762', '#76B6D8', 'REMOVE',
    //   '#1C7A90', '#249CB8', '#4ABED9', '#FBD75B', '#FBE571', '#FFFFFF'
    // ],
    // colorsStep: 6,
    // colorsText: [
    //   '#15E67F', '#E3DE8C', '#D8A076', '#D83762', '#76B6D8', 'REMOVE',
    //   '#1C7A90', '#249CB8', '#4ABED9', '#FBD75B', '#FBE571', '#FFFFFF'
    // ],
    tag: "textarea",

  }), [fileUpload, maxCount]);

  return <FroalaEditor model={model} onModelChange={setModel} config={froalaConfig} className={classes} />;
};

VFroala.defaultProps = {
  model: "",
  setModel: () => { },
  fileUpload: false,
  classes: '',
  maxCount: null
};

export default VFroala;