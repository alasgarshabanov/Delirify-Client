import React from "react";
import {Button, Paper, Typography} from "@material-ui/core";

const SubmitRegistrationContainer = props => {
  const { classes } = props;

  const handleReset = () => {

  };

  return (
    <Paper square elevation={0} className={classes.resetContainer}>
      <Typography>All steps completed - you&apos;re finished</Typography>
      <Button onClick={handleReset} className={classes.button}>
        Reset
      </Button>
    </Paper>
  )
};

export default SubmitRegistrationContainer;
