import React from "react";

import { Autocomplete, Checkbox, TextField } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function VMulSelect(props) {

  const { label, objKey, options, selections, onSelect, disabled, classes } = props;

  const onSelectChange = (e, values) => {
    onSelect(values);
  };

  return <>
    <Autocomplete
      className={classes}
      multiple
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option[objKey]}
      value={selections}
      onChange={onSelectChange}
      defaultValue={[]}
      disabled={disabled}
      renderOption={(cProps, option, { selected }) => (
        <li {...cProps}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option[objKey]}
        </li>
      )}
      // style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={label} />
      )}
    />
  </>;
};

VMulSelect.defaultProps = {
  objKey: 'None',
  label: '',
  disabled: false,
  options: [],
  selections: [],
  onSelect: () => { },
  classes: ''
};

// Typechecking props for the VMulSelect
// VMulSelect.propTypes = {
//   objKey: PropTypes.string,
//   label: PropTypes.string,
//   options: PropTypes.arrayOf(PropTypes.object),
//   selections: PropTypes.arrayOf(PropTypes.object),
//   onSelect: PropTypes.func,
//   disabled: PropTypes.bool,
// };

export default VMulSelect;