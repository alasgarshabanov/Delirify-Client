import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

export default function CollapsedBreadcrumbs() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs maxItems={2} aria-label='breadcrumb'>
        <Link color='inherit' href='#' onClick={handleClick}>
          Home
        </Link>
        <Link color='inherit' href='#' onClick={handleClick}>
          Catalog
        </Link>
        <Link color='inherit' href='#' onClick={handleClick}>
          Accessories
        </Link>
        <Link color='inherit' href='#' onClick={handleClick}>
          New Collection
        </Link>
        <Typography color='text.primary'>Belts</Typography>
      </Breadcrumbs>
    </Paper>
  );
}
