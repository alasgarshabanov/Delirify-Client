import React, {createContext, useContext, useEffect, useReducer} from "react";
import * as moment from "moment";

import registrationReducer from '../reducers/register.reducer';
import registrationActions from '../actions/register.actions';
import {getStorageKey, saveStorageKey} from "../../utils/localStorage";
import {REGISTRATION_STATE_KEY, SMS_CODE_VERIFICATION_EXPIRE_SECONDS} from "../../config";

const registrationContextInitialState = getStorageKey(REGISTRATION_STATE_KEY) || {
  currentStep: 0,
  isLoading: false,
  innerStep: 0,
  mobile: '',
  mobileVerified: false,
  countDownStart: false,
  verificationAttempts: 3,
  verificationAttemptExpireAfter: SMS_CODE_VERIFICATION_EXPIRE_SECONDS,
  userType: 1,
  email: '',
  username: '',
  company: {
    name: '',
    identityNumber: '',
    phone: '',
  },
  address: {
    country: '',
    city: '',
    zip: '',
    phone: '',
    addressLine: '',
    addressLine2: '',
  },
  validTill: moment().add(1, 'd')
};

const RegistrationContext = createContext(registrationContextInitialState);

const RegistrationProvider = ({ children }) => {
  const [registrationState, dispatch] = useReducer(registrationReducer, registrationContextInitialState);

  useEffect(() => {
    saveStorageKey(REGISTRATION_STATE_KEY, registrationState);
  }, [registrationState]);

  return (
    <RegistrationContext.Provider value={[registrationState, dispatch]}>
      {children}
    </RegistrationContext.Provider>
  )
};

const useRegistrationContext = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error(`useApp must be used within a AppContext`);
  }
  return context;
};


export { RegistrationContext, RegistrationProvider, useRegistrationContext, registrationContextInitialState, registrationActions };
