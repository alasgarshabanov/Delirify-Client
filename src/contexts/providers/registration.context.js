import React, {createContext, useContext, useEffect, useReducer} from "react";
import * as moment from "moment";

import registrationReducer from '../reducers/register.reducer';
import registrationActions from '../actions/register.actions';
import {getStorageKey, saveStorageKey} from "../../utils/localStorage";
import {REGISTRATION_STATE_KEY, SMS_CODE_VERIFICATION_EXPIRE_SECONDS} from "../../config";

const registrationContextInitialPureState = {
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
  address: {
    country: '',
    city: '',
    zip: '',
    phone: '',
    addressLine: '',
    addressLine2: '',
  },
  validTill: moment().add(5, 'h')
};

const registrationContextInitialState = getStorageKey(REGISTRATION_STATE_KEY) || registrationContextInitialPureState;

const RegistrationContext = createContext(registrationContextInitialState);

const RegistrationProvider = ({ children }) => {
  const [registrationState, dispatch] = useReducer(registrationReducer, registrationContextInitialState);

  useEffect(() => {
    if (moment(registrationContextInitialState.validTill).isBefore(Date.now())) {
      dispatch({ type: registrationActions.RESET_A_WHOLE_FORM });
    }
  }, [dispatch]);

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


export { RegistrationContext, RegistrationProvider, useRegistrationContext, registrationContextInitialState, registrationActions, registrationContextInitialPureState };
