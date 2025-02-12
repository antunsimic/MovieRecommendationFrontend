import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import Switch from '@mui/material/Switch';
import '../main.css'

export default function CheckboxLabels(props) {
    return (
        <Box sx={{ minWidth: 120 }} id="Christmas">
        <FormControl fullWidth>
      {/* <InputLabel id="christmas-switch-label">Theme</InputLabel> */}  
        <span>
        <Switch
          id="christmas-switch"
          onChange={() => {props.setChristmas((prev) => !prev)}}
        >
          
        </Switch>
        Christmas-themed
        </span>
        </FormControl>
      </Box>
    );
  }