import { Box, Icon } from "@mui/material";
import React from "react";
import { useState } from "react";
import VButton from "../../form/VButton";
import VCheck from "../../form/VCheck";
import VColorPicker from "../../form/VColorPicker";
import VDropZone from "../../form/VDropZone";
import VFileInput from "../../form/VFileInput";
import VFroala from "../../form/VFroala";
import VImage from "../../form/VImage";
import VInput from "../../form/VInput";
import VMulSelect from "../../form/VMulSelect";
import VSelect from "../../form/VSelect";
import VSwitch from "../../form/VSwitch";
import VText from "../../form/VText";

const data = [
  { value: 10, label: 'Apple' },
  { value: 20, label: 'Banana' },
  { value: 30, label: 'Grape' },
];

const Dashboard = () => {

  const [checked, setChecked] = useState(false);
  const [option, setOption] = useState('');
  const [selections, setSelection] = useState([]);
  const [value, setValue] = useState('');
  const [url, setUrl] = useState(null);
  const [model, setModel] = useState('');
  const [color, setColor] = useState('#DBCD19');

  const onClick = () => {
    console.log('[clicked]');
  };

  return <>
    <h1>This is Dashboard page</h1>

    <Box>
      <h1>Color Picker</h1>
      <VColorPicker color={color} setColor={setColor} classes="w-100" />
    </Box>

    <Box>
      <h1>Image</h1>
      <VImage
        src="/avatar.png"
        width="100px"
        height="100px"
        error="user"
        classes="rounded-full"
      />
      <VImage
        src="/avatar.png"
        width="100px"
        height="100px"
      />
    </Box>

    <Box>
      <h1>Froala</h1>
      <VFroala model={model} setModel={setModel} fileUpload />
    </Box>

    <Box>
      <h1>Checkbox</h1>
      <VCheck
        checked={checked}
        setChecked={setChecked}
      >
        Upload
      </VCheck>
      <VCheck
        checked={checked}
        setChecked={setChecked}
        icon="favorite_border"
        checkedIcon="favorite"
      >
        Custom
      </VCheck>
    </Box>


    <Box>
      <h1>File</h1>
      <VFileInput
        url={url}
        setUrl={setUrl}
        accept="image/*"
      >
        <Icon>upload</Icon>Upload
      </VFileInput>
    </Box>

    <Box>
      <h1>Drop Zone</h1>
      <VDropZone
        url={url}
        setUrl={setUrl}
        accept="image/*"
        classes="w-40 h-40"
      >
        <div className="opacity-40 flex flex-col justify-center items-center">
          <Icon fontSize="large">cloud_upload</Icon>
          <div>Drag and Drop file</div>
        </div>
      </VDropZone>
    </Box>

    <Box>
      <h1>Input</h1>
      <VInput
        label="Text Input"
        value={value}
        setValue={setValue}
        endIcon="visibility"
        variant="standard"
      />
      <VInput
        label="Text Input"
        value={value}
        setValue={setValue}
        startIcon="check"
      />
      <VInput
        label="Text Input"
        value={value}
        setValue={setValue}
        rows={3}
      />
      <VInput
        label="Text Input"
        value={value}
        setValue={setValue}
        variant="standard"
      />
      <VInput
        label="Text Input"
        value={value}
        setValue={setValue}
      />
      <VInput
        value={value}
        setValue={setValue}
      />
    </Box>

    <Box>
      <h1>Mul Select</h1>
      <VMulSelect
        label="Courses"
        objKey="label"
        options={data}
        selections={selections}
        onSelect={setSelection}
      />
    </Box>

    <Box>
      <h1>Select</h1>
      <VSelect
        classes="w-full"
        option={option}
        setOption={setOption}
        items={data}
        label="Fruit"
      />
      <VSelect
        classes="w-full"
        option={option}
        setOption={setOption}
        items={data}
        label="Fruit"
        variant="filled"
      />
      <VSelect
        classes="w-full"
        option={option}
        setOption={setOption}
        items={data}
        label="Fruit"
        variant="standard"
      />
    </Box>

    <Box>
      <h1>Switch</h1>
      <VSwitch
        checked={checked}
        setChecked={setChecked}
        type="MUI"
      >Mui Check</VSwitch>
      <VSwitch
        checked={checked}
        setChecked={setChecked}
        color="info"
        type="Android"
      >Android Check</VSwitch>
      <VSwitch
        checked={checked}
        setChecked={setChecked}
      >Use this?</VSwitch>
    </Box>

    <Box>
      <h1>Text Group</h1>
      <VText size={25}>This is the text</VText>
      <VText size={25} icon="book" color="gray">This is the text</VText>
      <VText size={25} b>This is the text</VText>
    </Box>

    <Box>
      <h1>Button Group</h1>
      <VButton
        startIcon="send"
        iconOnly
        variant="outlined"
        color="success"
        onClick={onClick}
      />
      <VButton
        startIcon="alarm"
        iconButton
        variant="outlined"
        color="primary"
        onClick={onClick}
      />
      <VButton
        startIcon="alarm"
        iconButton
        variant="outlined"
        color="primary"
        onClick={onClick}
        loading
      />
      <VButton
        startIcon="alarm"
        iconButton
        variant="outlined"
        color="primary"
        onClick={onClick}
        classes="border-0"
      />
      <VButton
        startIcon="alarm"
        iconButton
        variant="outlined"
        color="primary"
        onClick={onClick}
        loading
        classes="border-0"
      />
      <VButton
        startIcon="check"
        variant="contained"
        color="success"
        onClick={onClick}
        text="Start"
      />
      <VButton
        startIcon="block"
        variant="contained"
        color="success"
        onClick={onClick}
        text="Start"
        disabled
      />
      <VButton
        startIcon="start"
        variant="contained"
        color="success"
        onClick={onClick}
        text="Start"
        loading
      />
    </Box>


  </>;
};

export default Dashboard;