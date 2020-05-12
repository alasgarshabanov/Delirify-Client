import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {auth as firebaseAuth} from '../services/auth/firebase/firebase';
import {UPDATE_FIREBASE_USER} from '../../shared/constants/ActionTypes';

export const useAuthToken = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const authUser = useSelector(({auth}) => auth.user);
  useEffect(() => {
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
    const checkAuth = () => {
      Promise.all([firebaseCheck()]).then(() => {
        setLoading(false);
      });
    };
    checkAuth();
  }, [dispatch]);

  useEffect(() => {
    if (!authUser) {
      setToken(null);
    }
    if (authUser) {
      setToken(authUser.token);
    }
  }, [authUser]);

  return [token, loading];
};

export const useAuthUser = () => {
  const authUser = useSelector(({auth}) => auth.user);
  if (authUser) {
    return authUser;
  }
  return {
    displayName: 'Loading',
  };
};
