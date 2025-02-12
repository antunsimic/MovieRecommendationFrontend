import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import all_countries from './all_countries';
import '../main.css'





function Country(props) {

    const handleChange = (event) => {
      const value = event.target.value
      
      const country = all_countries.find((country) => country.iso === value)
      props.setCountry(country);
      if (country.population * 3 < 100) {
        props.setIsSmall(true)
        if (["Well Known", "Hidden Gem"].includes(props.prominence)) {
          if (props.prominence === "Well Known") {
              props.setProminence("Globally Recognized")
          }
          else {
            props.setProminence("Locally Well Known")
          }
        }
      }
      else {
        props.setIsSmall(false)
        if (["Globally Recognized", "Locally Well Known"].includes(props.prominence)) {
          if (props.prominence === "Globally Recognized") {
              props.setProminence("Well Known")
          }
          else {
            props.setProminence("Hidden Gem")
          }
        }
      }
    };

  return  <Box sx={{ minWidth: 120 }} id="Country">
      <FormControl fullWidth>
        <InputLabel id="country-select-label">Country</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={props.country.iso}
          label="Country"
          onChange={handleChange}
        >
        
      { all_countries.map((country) => (
        <MenuItem key={country.iso} value={country.iso}>{country.english_name}</MenuItem>
      )) }  

        </Select>
      </FormControl>
    </Box>
  
}


export default Country;