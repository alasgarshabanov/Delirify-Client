import {
  auth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
} from '../../@crema/services/auth/firebase/firebase';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  UPDATE_FIREBASE_USER,
} from '../../shared/constants/ActionTypes';

export const onSignUpFirebaseUser = ({email, password}) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    try {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_FIREBASE_USER, payload: data});
        })
        .catch(error => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
};

export const onForgetPasswordFirebaseUser = email => {
  return dispatch => {
    dispatch({type: FETCH_START});
    try {
      auth
        .sendPasswordResetEmail(email)
        .then(data => {
          dispatch({type: FETCH_SUCCESS});
          // dispatch({type: UPDATE_FIREBASE_USER, payload: data});
        })
        .catch(error => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
};

export const onGetFirebaseSignInUser = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    try {
      auth
        .onAuthStateChanged()
        .then(authUser => {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: UPDATE_FIREBASE_USER,
            payload: {
              uid: authUser.uid,
              displayName: authUser.displayName,
              email: authUser.email,
              photoURL: authUser.photoURL,
              token: authUser.refreshToken,
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

export const onSignInFirebaseUser = (email, password) => {
  return dispatch => {
    try {
      dispatch({type: FETCH_START});
      auth
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_FIREBASE_USER, payload: data});
        })
        .catch(error => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
};

export const onSignOutFirebaseUser = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    try {
      auth
        .signOut()
        .then(data => {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_FIREBASE_USER, payload: null});
        })
        .catch(error => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
};

export const signInUserWithGoogle = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    try {
      auth
        .signInWithPopup(googleAuthProvider)
        .then(data => {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_FIREBASE_USER, payload: data.user});
        })
        .catch(error => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
};
export const signInUserWithGithub = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    try {
      auth
        .signInWithPopup(githubAuthProvider)
        .then(data => {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_FIREBASE_USER, payload: data.user});
        })
        .catch(error => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
};

export const signInUserWithFacebook = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    try {
      auth
        .signInWithPopup(facebookAuthProvider)
        .then(data => {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_FIREBASE_USER, payload: data.user});
        })
        .catch(error => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
};

export const signInUserWithTwitter = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    try {
      auth
        .signInWithPopup(twitterAuthProvider)
        .then(data => {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_FIREBASE_USER, payload: data.user});
        })
        .catch(error => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
};
