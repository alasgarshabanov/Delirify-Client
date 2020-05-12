import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {Auth as awsAuth, Hub} from 'aws-amplify';
import {
  UPDATE_COGNITO_USER,
  UPDATE_FIREBASE_USER,
  UPDATE_JWT_AUTH_USER,
} from '../../shared/constants/ActionTypes';
import {auth as firebaseAuth} from '../services/auth/firebase/firebase';
import {onGetLoggedInCognitoUser} from '../../redux/actions';

export const useAuthToken = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const firebaseUser = useSelector(({firebaseAuth}) => firebaseAuth.user);
  const awsCognitoUser = useSelector(({awsCognito}) => awsCognito.user);
  const jwtAuthUser = useSelector(({jwtAuth}) => jwtAuth.user);
  const auth0User = useSelector(({auth0User}) => auth0User.user);
  useEffect(() => {
    const awsAuthUser = () =>
      new Promise(resolve => {
        awsAuth
          .currentAuthenticatedUser()
          .then(user => {
            resolve();
            if (user) {
              dispatch({
                type: UPDATE_COGNITO_USER,
                payload: {
                  uid: user.username,
                  displayName: user.attributes.name,
                  email: user.attributes.email,
                  photoURL: user.photoURL,
                  token: user.signInUserSession.accessToken.jwtToken,
                },
              });
            }
          })
          .catch(function(error) {
            resolve();
          });
        return Promise.resolve();
      });

    const firebaseCheck = () =>
      new Promise(resolve => {
        firebaseAuth.onAuthStateChanged(authUser => {
          if (authUser) {
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
          }
          resolve();
        });
        return Promise.resolve();
      });

    const jwtAthCheck = () =>
      new Promise(resolve => {
        const user = localStorage.getItem('jwt-auth-user');
        dispatch({
          type: UPDATE_JWT_AUTH_USER,
          payload: JSON.parse(user),
        });
        resolve();
        return Promise.resolve();
      });

    const checkAuth = () => {
      Promise.all([firebaseCheck(), awsAuthUser(), jwtAthCheck()]).then(() => {
        setLoading(false);
      });
      Hub.listen('auth', ({payload: {event, data}}) => {
        switch (event) {
          case 'signIn':
            dispatch(onGetLoggedInCognitoUser());
            break;
          case 'signOut':
            dispatch({type: UPDATE_COGNITO_USER, payload: null});
            break;
          default:
            return false;
        }
      });
    };
    checkAuth();
  }, [dispatch]);

  useEffect(() => {
    if (!auth0User) {
      setToken(null);
    }
    if (auth0User) {
      setToken(auth0User.token);
    }
  }, [auth0User]);

  useEffect(() => {
    if (!jwtAuthUser) {
      setToken(null);
    }
    if (jwtAuthUser) {
      setToken(jwtAuthUser.token);
    }
  }, [jwtAuthUser]);

  useEffect(() => {
    if (!awsCognitoUser) {
      setToken(null);
    }
    if (awsCognitoUser) {
      setToken(awsCognitoUser.token);
    }
  }, [awsCognitoUser]);

  useEffect(() => {
    if (!firebaseUser) {
      setToken(null);
    }
    if (firebaseUser) {
      setToken(firebaseUser.token);
    }
  }, [firebaseUser]);

  return [token, loading];
};

export const useAuthUser = () => {
  const firebaseUser = useSelector(({firebaseAuth}) => firebaseAuth.user);
  const awsCognitoUser = useSelector(({awsCognito}) => awsCognito.user);
  const auth0User = useSelector(({auth0User}) => auth0User.user);
  const jwtAuthUser = useSelector(({jwtAuth}) => jwtAuth.user);
  if (firebaseUser) {
    return firebaseUser;
  }
  if (awsCognitoUser) {
    return awsCognitoUser;
  }
  if (auth0User) {
    return auth0User;
  }
  if (jwtAuthUser) {
    return jwtAuthUser;
  }
  return {
    displayName: 'Loading',
  };
};
