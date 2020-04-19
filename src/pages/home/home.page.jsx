import React from "react";
import {Paper, Grid, Typography, Button, Container} from "@material-ui/core";

import useHomePageStyles from "./home.style";

const HomePage = () => {
  const classes = useHomePageStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Grid item xs={9}>
              <Typography>Start to sell directly</Typography>
              <Button variant="contained" color="secondary" href={'/sell-without-registration'}>
                Start To Sell
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Grid item xs={9}>
              <Typography>I need only delivery</Typography>
              <Button variant="contained" href={'/order-delivery'}>
                Order Delivery
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Grid item xs={9}>
              <Typography>If you don't want each time fill long form, will be best to register now :)</Typography>
              <Button variant="contained" color="primary" href={'/register'}>Start With Registration</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default HomePage;
