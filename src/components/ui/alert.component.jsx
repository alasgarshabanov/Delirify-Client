import React from "react";
import MuiAlert from '@material-ui/lab/Alert';

const AlertComponent = props => {
  return (
    <MuiAlert elevation={6} style={{marginBottom: '7px'}} variant="filled" {...props} />
  )
};

export default AlertComponent;
