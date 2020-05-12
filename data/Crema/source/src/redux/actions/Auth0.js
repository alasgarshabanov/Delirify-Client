import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  SET_AUTH0_TOKEN_SET,
  UPDATE_AUTH0_USER,
} from '../../shared/constants/ActionTypes';
import Auth0Config from '../../@crema/services/auth/auth0/auth0Config';

export const onSignInAuth0User = () => {
  return async dispatch => {
    dispatch({type: FETCH_START});
    try {
      const auth0 = await Auth0Config();
      await auth0.loginWithPopup({});
      auth0
        .getUser()
        .then(user => {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: SET_AUTH0_TOKEN_SET, payload: user.sub});
          dispatch({
            type: UPDATE_AUTH0_USER,
            payload: {
              uid: user.sub,
              displayName: user.name,
              email: user.email,
              photoURL: user.picture,
              token: user.sub,
            },
          });
        })
        .catch(error => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
};

export const onSignOutAuth0User = () => {
  return async dispatch => {
    dispatch({type: FETCH_START});
    try {
      const auth0 = await Auth0Config();
      auth0.logout();
      dispatch({type: UPDATE_AUTH0_USER, payload: null});
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
};
