import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarProvider, useSnackbar } from "notistack";
import Button from "@material-ui/core/Button";
import Popup from "../Popup/Popup";

const useStyles = makeStyles({
  root: {
   display:"flex",
   justifyContent:"flex-start"
  },

  sucess: {
    backgroundColor: "#43a047",
  },
});

function MyApp() {
  const classes = useStyles();
  const [defaultMessage, setDefaultMessage] = useState(
    "This is a test message!"
  );
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([
    {
      name: "success",
      status: false,
      
    },
    {
      name: "error",
      status: false,
    },
    {
      name: "default",
      status: false,
    },
    {
      name: "info",
      status: false,
    },
    {
      name: "warning",
      status: false,
    },
    {
      name: "custom",
      status: false,
      editStatus: true,
      message: "this will be default messagex`",
    },
  ]);

  const handleClick = (name) => {
    let variant = name;
    console.log(variant);
    console.log(name);
    let newData = [...data];
    data.map((item, index) => {
      console.log("item editstatus==>",item?.editStatus)
      if (item.name == name && item.editStatus) {
        setOpen(true);
      } else if (item.name == name) {
        enqueueSnackbar(defaultMessage, { variant }); 
      }
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const messageHandler=(e)=>{
    console.log(e.target.value)
  }

const  submitHandler=(message)=>{
  handleClose()
  let variant='custom'
  enqueueSnackbar(message, { variant }); 
}

  return (
    <div className={classes.root}>
      <div>
      {data.map((item, index) => {
        return (
          <Button
            onClick={() => {
              handleClick(item.name);
            }}
          >
            {item.name}
          </Button>
        );
      })}
      </div>
      <Popup
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        messageHandler={messageHandler}
        submitHandler={submitHandler}
      />
    </div>
  );
}

export default function Actions() {
  return (
    <div>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        maxSnack={10}
      >
        <MyApp />
      </SnackbarProvider>
    </div>
  );
}
