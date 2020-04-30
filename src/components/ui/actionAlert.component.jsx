import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ActionAlertComponent(props) {
  const classes = useStyles();
  const { message } = props;

  return (
    <div className={classes.root}>
      <Alert { ...props } >{ message }</Alert>
    </div>
  );
}
