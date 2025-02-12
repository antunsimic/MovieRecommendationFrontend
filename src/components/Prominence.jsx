import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../main.css'


function Prominence(props) {

 

  const option1 = props.isSmall ? "Locally Well Known" : "Hidden Gem"
  const option2 = props.isSmall ? "Globally Recognized" : "Well Known"

  return  <Box sx={{ minWidth: 120 }} id="Prominence">
      <FormControl fullWidth>
        <InputLabel id="prominence-select-label">Prominence</InputLabel>
        <Select
          labelId="prominence-select-label"
          id="prominence-select"
          value={props.prominence}
          label="Prominence"
          onChange={(event) => {props.setProminence(event.target.value)}}
        >
        
      
        <MenuItem key={option1} value={option1} >{option1}</MenuItem>
        <MenuItem key={option2} value={option2} >{option2}</MenuItem>
      

        </Select>
      </FormControl>
    </Box>
  
}


export default Prominence;