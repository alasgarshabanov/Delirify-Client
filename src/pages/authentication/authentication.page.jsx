import React, { useState, useEffect, useContext } from "react";
import { Redirect } from 'react-router-dom';
import {Grid, Box, Typography, Paper, Button, Input,
  FormControl
} from "@material-ui/core";
import { Link as RouteLink } from "react-router-dom";

import useStyles from "./authentication.style";

import useFetch from "../../hooks/useFetch.hook";
import useLocalStorage from "../../hooks/useLocalStorage.hook";
import { CurrentUserContext } from '../../contexts/currentUser.context';
import BackendErrorMessages from '../../components/errorHandlers/backendErrorMessages.component';

const initialInputs = {
  email: '',
  password: '',
  username: ''
}

const AuthenticationPage = ({ match }) => {
  const isLogin = match.path === '/login'
  const pageTitle = isLogin ? 'Sign In' : 'Sign Up';
  const descriptionLink = isLogin ? '/register' : '/login';
  const descriptionText = isLogin ? 'Need an account?' : 'Have an account?';
  const apiURL = isLogin ? '/users/login' : '/users';

  const classes = useStyles();
  const [form, setForm] = useState(initialInputs);
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [{ response, isLoading, error }, doFetch] = useFetch(apiURL);
  const [, setToken] = useLocalStorage('token');
  const [, setCurrecntUserState] = useContext(CurrentUserContext);

  const {email, password, username} = form;

  useEffect(() => {
    if(!response) return;

    setToken(response.user.token);
    setIsSuccessfullSubmit(true);
    setCurrecntUserState(state => ({
      ...state, 
      isLoggedIn: true, 
      isLoading: false,
      currentUser: response.user
    }));
  }, [response, setToken, setCurrecntUserState]);

  const handleSubmit = ev => {
    ev.preventDefault();
    const user = isLogin ? {email, password} : {email, username, password};
    doFetch({
      method: 'post',
      data: {
        user
      }
    });
  };

  if (isSuccessfullSubmit) return <Redirect to="/" />;


  return(
    <div className="auth-page">
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container xs={12} sm item={true} align="center">
            <Box width={1}>
              <div>
                <Typography
                  variant="h4" component="h2" align="center" className="page-header" display="block">
                  {pageTitle}
                </Typography>
                <form onSubmit={handleSubmit}>
                  { error && <BackendErrorMessages backendErrors={error.errors} />}
                  <FormControl fullWidth variant="outlined" className={classes.input}>
                    <Input
                      type="email" placeholder="Email"
                      value={email}
                      onChange={e => setForm({...form, email: e.target.value})}
                    />
                    {/*<FormHelperText className="text-danger"> Your email </FormHelperText>*/}
                  </FormControl>
                  {!isLogin && (
                    <FormControl fullWidth variant="outlined" className={classes.input}>
                      <Input
                        type="text" placeholder="Username"
                        value={username}
                        onChange={e => setForm({...form, username: e.target.value})}
                      />
                    </FormControl>
                  )}
                  <FormControl fullWidth variant="outlined" className={classes.input}>
                    <Input
                      type="password" placeholder="Password"
                      value={password}
                      onChange={e => setForm({...form, password: e.target.value })}
                    />
                  </FormControl>
                  <FormControl className={classes.input}>
                    <Button
                      type="submit" color="primary"
                      disabled={isLoading}
                      onClick={(ev) => console.log('Clicked', ev.target)}
                    >{ pageTitle }</Button>
                  </FormControl>
                </form>
              </div>
              <p className="link-text">
                <RouteLink to={descriptionLink}>{descriptionText}</RouteLink>
              </p>
            </Box>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default AuthenticationPage;
