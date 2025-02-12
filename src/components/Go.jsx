import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import '../main.css'


function Go(props) {
  return  <Box sx={{ minWidth: 120 }} id="Go">
  <FormControl fullWidth>
  <Button onClick={props.getMovie} color="error" variant="contained"> <PowerSettingsNewIcon />  </Button>
  </FormControl>
</Box>

}


export default Go;