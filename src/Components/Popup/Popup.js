import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";

export default function Popup({ open, handleClose, submitHandler }) {
  const [message, setMessage] = useState("test");

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Enter your message"}
        </DialogTitle>
        <DialogContent>
          <TextField
            onChange={messageHandler}
            id="standard-basic"
            label="Enter your message"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button
            onClick={() => {
              submitHandler(message);
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
