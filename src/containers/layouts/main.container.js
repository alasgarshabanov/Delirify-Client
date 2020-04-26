import React from "react";
import {Paper, ThemeProvider} from "@material-ui/core";
import TopBarComponent from "../../components/topBar/tobBar.component";

import Routes from '../../routes';
import theme from "../../theme/muiTheme";
import useLayoutStyles from "./layout.style";

const MainContainer = () => {

  const classes = useLayoutStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appWrapper}>
        <Paper className={classes.appMain} >
          <TopBarComponent />
          <div className="app-main">
            <Routes />
            <Paper className={classes.footer}>Footer</Paper>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default MainContainer;
