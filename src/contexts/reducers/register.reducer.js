import { registrationContextInitialState } from '../providers/registration.context';
import registerActions  from '../actions/register.actions';
import {SMS_CODE_VERIFICATION_EXPIRE_SECONDS} from "../../config";

export default (state = registrationContextInitialState, action) => {
  const { currentStep, verificationAttempts, verificationAttemptExpireAfter } = state;

  switch (action.type) {

    case registerActions.RESET_A_WHOLE_FORM:
      return resetMobileVerification(state);

    case registerActions.NEXT_STEP:
      return { ...state, currentStep: currentStep + 1 };

    case registerActions.NEXT_INNER_STEP:
      return { ...state, innerStep: 1 };

    case registerActions.PREVIOUS_STEP:
      return { ...state, currentStep: currentStep - 1 };

    case registerActions.START_MOBILE_SENT:
      const { mobile } = action.payload;
      return { ...state, isLoading: true, mobile };

    case registerActions.TIMER_COUNTDOWN_START:
      return {...state, countDownStart: true};

    case registerActions.REFRESH_TIMER:
      if (verificationAttemptExpireAfter === 1) {
        return resetMobileVerification(state);
      }
      return { ...state,
        verificationAttemptExpireAfter: verificationAttemptExpireAfter - 1
      };

    case registerActions.START_VERIFICATION_CODE_SENT:
      if (verificationAttempts === 0)
        return resetMobileVerification(state);
      return { ...state, verificationAttempts: verificationAttempts - 1 };

    case registerActions.FAILED_MOBILE_SENT:
    case registerActions.SUCCESS_MOBILE_SENT:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

const resetMobileVerification = (state) => {
  return {
    ...state,
    currentStep: 0,
    innerStep: 0,
    verificationAttempts: 3,
    countDownStart: false,
    verificationAttemptExpireAfter: SMS_CODE_VERIFICATION_EXPIRE_SECONDS,
    mobile: ''
  }
};
