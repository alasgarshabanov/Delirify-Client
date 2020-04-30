import { registrationContextInitialPureState, registrationActions} from '../providers/registration.context';
import registerActions  from '../actions/register.actions';

export default (state = registrationContextInitialPureState, action) => {
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

      case registerActions.ACTION_MOBILE_NUMBER_VERIFIED:
      return { ...state, mobileVerified: true };

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

    case registrationActions.ACTION_USER_FILLED_PERSONAL_DATA:
      const { name, surname, username, email } = action.payload;
      return {
        ...state,
        currentStep: currentStep + 1,
        email,
        username,
        user: { name, surname }
      };

    case registerActions.FAILED_MOBILE_SENT:
    case registerActions.SUCCESS_MOBILE_SENT:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

const resetMobileVerification = (state) => {
  return registrationContextInitialPureState;
};
