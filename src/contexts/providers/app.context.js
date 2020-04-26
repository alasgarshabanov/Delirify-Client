import React, {
  useEffect, createContext, useContext, useReducer, useMemo
} from 'react';

import appReducer from '../reducers/app.reduces';
import appActions from '../actions/app.actions';
import { APP_STORAGE_KEY } from "../../config";
import { getStorageKey, saveStorageKey } from '../../utils/localStorage';


const appInitialState = {
  locale: 'en',
  currency: 'azn',
  isDarkTheme: true,
  languages: [
    { locale: 'az', title: 'Azərbaycanca' },
    { locale: 'en', title: 'English' },
    { locale: 'ru', title: 'Русский' },
  ],
  currencies: [
    { code: 'azn', title: 'AZN', rate: 5.3 },
    { code: 'usd', title: '$', rate: 1 }
  ]
};

const localAppState = getStorageKey(APP_STORAGE_KEY);

const appCurrentState = localAppState || appInitialState;

const AppContext = createContext(appCurrentState);

const AppContextProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(appReducer, appCurrentState);

  useEffect(() => {
    saveStorageKey(APP_STORAGE_KEY, appState);
  }, [appState]);

  const value = useMemo(() => [appState, dispatch], [appState]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useApp must be used within a AppContext`);
  }
  return context;
};


export { AppContext, AppContextProvider, useAppContext, appCurrentState, appActions};

