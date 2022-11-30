import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../../redux/hook';

export const Dropdown = ({btnName, btnClick}:{btnName?:string, btnClick?:any}) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const dispatch = useAppDispatch();
  
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = () => {
    setOpen(false);
    dispatch(btnClick({"title":name,
    "description": description}))
  };
    return <>
     <div>
     <Fab onClick={handleClickOpen} size="medium" color="primary" aria-label="add">
         <AddIcon /></Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="standard"
          fullWidth
          onChange={(e) => setDescription(e.target.value)}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>{btnName}</Button>
        </DialogActions>
      </Dialog>
    </div>
    </>;
};