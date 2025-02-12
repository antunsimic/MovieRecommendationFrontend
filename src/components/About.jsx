import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import '../main.css'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function About() {
  const [open, setOpen] = React.useState(false);
  const aboutButtonRef = React.useRef(null); // Ref to track "About" button


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);

  };

  return (
    <React.Fragment>
      <div id="About">
      <Button  ref={aboutButtonRef} variant="contained" onClick={handleClickOpen}>
        About
      </Button>
      </div>

      <BootstrapDialog id="AboutDialog"
        onClose={handleClose}
        slotProps={{
          transition: {
            onExited: () => {
              if (aboutButtonRef.current) {
                aboutButtonRef.current.focus();
              }
            }
          }
        }}
        open={open}
      >
        <DialogTitle className="item" sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          About
        </DialogTitle>
        <IconButton
          
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent className="item" dividers >
          <Typography gutterBottom component="div">
          <p>Creator </p>
          <a href="https://antunsimic.github.io/resume/">Antun Simić</a>
          </Typography>
          <Typography gutterBottom component="div">
          <p>Support this project</p> 
          <ul>
            <li>GitHub</li>
            <li><a href="https://buymeacoffee.com/antunsimic">Buy me a coffee</a> </li>
          </ul>
          
         
          </Typography>

        </DialogContent>
  
      </BootstrapDialog>
    </React.Fragment>
  );
}
