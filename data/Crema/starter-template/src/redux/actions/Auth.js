import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  SET_TOKEN_SET,
  SET_USER_DATA,
  SIGNOUT_USER_SUCCESS,
  UPDATE_AUTH_USER,
} from '../../shared/constants/ActionTypes';
import jwtAxios from '../../@crema/services/auth/index';
import {defaultUser} from '../../shared/constants/AppConst';

export const onJwtUserSignUp = ({email, password, name}) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    setTimeout(() => {
      dispatch({type: FETCH_SUCCESS});

      dispatch({
        type: UPDATE_AUTH_USER,
        payload: defaultUser,
      });
      localStorage.setItem('auth-user', JSON.stringify(defaultUser));
      dispatch({type: SET_TOKEN_SET, payload: 'access-token'});
    }, 500);
    /*jwtAxios
			.post('register', {
				email: email,
				password: password,
				name: name,
			})
			.then(({data}) => {
				if (data.result) {
					localStorage.setItem(
						'token',
						JSON.stringify(data.token.access_token)
					);
					jwtAxios.defaults.headers.common['access-token'] =
						'Bearer ' + data.token.access_token;
					dispatch({type: FETCH_SUCCESS});
					dispatch({type: SET_TOKEN_SET, payload: data.token.access_token});
					dispatch({type: SET_USER_DATA, payload: data.user});
				} else {
					dispatch({type: FETCH_ERROR, payload: 'Network Error'});
				}
			})
			.catch(function(error) {
				dispatch({type: FETCH_ERROR, payload: error.message});
			});*/
  };
};

export const onJwtSignIn = ({email, password}) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    setTimeout(() => {
      dispatch({type: FETCH_SUCCESS});
      dispatch({
        type: UPDATE_AUTH_USER,
        payload: defaultUser,
      });
      localStorage.setItem('auth-user', JSON.stringify(defaultUser));
      dispatch({type: SET_TOKEN_SET, payload: 'access-token'});
    }, 500);

    /*jwtAxios
			.post('login', {
				email: email,
				password: password,
			})
			.then(({data}) => {
				if (data.result) {
					localStorage.setItem(
						'token',
						JSON.stringify(data.token.access_token)
					);
					jwtAxios.defaults.headers.common['access-token'] =
						'Bearer ' + data.token.access_token;
					dispatch({type: FETCH_SUCCESS});
					dispatch({type: SET_TOKEN_SET, payload: data.token.access_token});
				} else {
					dispatch({type: FETCH_ERROR, payload: data.error});
				}
			})
			.catch(function(error) {
				dispatch({type: FETCH_ERROR, payload: error.message});
			});*/
  };
};

export const getUser = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    jwtAxios
      .post('auth')
      .then(({data}) => {
        if (data.result) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: SET_USER_DATA, payload: data.user});
        } else {
          dispatch({type: FETCH_ERROR, payload: data.error});
        }
      })
      .catch(function(error) {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onJWTAuthSignout = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    setTimeout(() => {
      dispatch({type: SIGNOUT_USER_SUCCESS});
      dispatch({type: FETCH_SUCCESS});
      localStorage.removeItem('auth-user');
    }, 500);
    /*jwtAxios
			.get('logout')
			.then(({data}) => {
				if (data.result) {
					localStorage.removeItem('token');
					dispatch({type: FETCH_SUCCESS});
					dispatch({type: SIGNOUT_USER_SUCCESS});
				} else {
					dispatch({type: FETCH_ERROR, payload: data.error});
				}
			})
			.catch(function(error) {
				dispatch({type: FETCH_ERROR, payload: error.message});
			});*/
  };
};
