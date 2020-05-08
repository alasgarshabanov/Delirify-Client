import React, {createContext, useContext, useEffect, useReducer} from "react";

import registrationReducer from '../reducers/register.reducer';
import registrationActions from '../actions/register.actions';

const mapInitialState = {
  country: '',
  city: '',
  zip: '',
  addressText: '',
  ltd: null,
  lng: null
};

const MapContext = createContext(mapInitialState);

const MapProvider = ({ children }) => {
  const [mapState, dispatch] = useReducer(registrationReducer, mapInitialState);

  useEffect(() => {
  }, [mapState]);

  return (
    <MapContext.Provider value={[mapState, dispatch]}>
      {children}
    </MapContext.Provider>
  )
};

const useRegistrationContext = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error(`useApp must be used within a AppContext`);
  }
  return context;
};


export { MapContext, MapProvider, useRegistrationContext, mapInitialState, registrationActions };
