import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function NoMovie(props) {
  const [open, setOpen] = React.useState(true);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return ( <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant='filled'
          sx={{ width: '100%' }}
        >
          {props.country.english_name} doesn't have any globally recognized {props.christmas ? "Christmas" : ""} movies. Switching to a locally well known {props.christmas ? "Christmas" : ""} film...
        </Alert>
      </Snackbar>
    
  );
}