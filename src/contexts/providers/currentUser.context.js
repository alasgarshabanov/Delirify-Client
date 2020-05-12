import React, { createContext, useReducer } from 'react';

import currentUserReducer from '../reducers/currentUser.reducer';
import currentUserActions from '../actions/currentUser.actions';

const currentUserInitialState = {
    isLoading: false,
    isLoggedIn: false,
    currentUser: null,
};

const CurrentUserContext = createContext([{}, p => {}]);

const CurrentUserProvider = ({children}) => {
    const value = useReducer(currentUserReducer, currentUserInitialState);
    return (
      <CurrentUserContext.Provider value={value}>
          {children}
      </CurrentUserContext.Provider>
    );
};

export {CurrentUserContext, CurrentUserProvider, currentUserActions, currentUserInitialState};
