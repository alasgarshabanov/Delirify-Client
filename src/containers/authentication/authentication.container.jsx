import React from "react";
import { useIntl } from "react-intl";
import { Paper, Grid, Box } from "@material-ui/core";
import { Link } from 'react-router-dom';

import LoginContainer from "./login.container";
import RegisterContainer from "./register.container";

import useAuthStyles from "./authentication.style";
import {RegistrationProvider} from "../../contexts/providers/registration.context";

const AuthenticationContainer = props => {
  const classes = useAuthStyles();
  const {formatMessage: t} = useIntl();

  const { isLoginView } = props;

  const DONT_HAVE_ACCOUNT_SIGN_UP = t({ id: "DONT_HAVE_ACCOUNT_SIGN_UP", defaultMessage: "Don't have an account?"});

  const switchBetweenAuthPages = (loginPage) => {
    const title = loginPage ? DONT_HAVE_ACCOUNT_SIGN_UP : 'Already has an account ?';
    const url = loginPage ? '/register' : '/login';
    return (
      <span>
        <Link to={url} className={classes.linkStyle}>{ title }</Link>
      </span>
    );
  };

  return (
      <Paper className={classes.paper}>
        <Grid container xs={12} sm item={true} align="center">
          <Box width={1}>
            {isLoginView
              ? (<LoginContainer classes={classes} {...props} />)
              : (<RegistrationProvider>
                  <RegisterContainer classes={classes} {...props} />
                </RegistrationProvider>)
            }
            { switchBetweenAuthPages(isLoginView)}
          </Box>
        </Grid>
      </Paper>
  );
};

export default AuthenticationContainer;
