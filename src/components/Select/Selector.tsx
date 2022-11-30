import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const Selector = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
    return <>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value="">
        </MenuItem>
        <MenuItem value={20}>done</MenuItem>
        <MenuItem value={30}>queue</MenuItem>
      </Select>
    </FormControl>
    </>;
};