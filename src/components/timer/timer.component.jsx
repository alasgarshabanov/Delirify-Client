import React, { useEffect } from 'react';
import AlertComponent from "../ui/alert.component";
import {registrationActions, useRegistrationContext} from "../../contexts/providers/registration.context";

const TimerComponent = props => {
  const [registerState, dispatch] = useRegistrationContext();
  const { countDownStart, verificationAttemptExpireAfter,  verificationAttempts, innerStep} = registerState;

  useEffect(() => {
    if (countDownStart) {
      const interval = setInterval(() => {
        dispatch({ type: registrationActions.REFRESH_TIMER });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [dispatch, verificationAttemptExpireAfter, verificationAttempts, countDownStart]);

  return (
    <AlertComponent {...props}>
      {innerStep === 0 && `You can send additional request only after ${verificationAttemptExpireAfter} seconds`}
      {innerStep === 1 && `Will expire after ${verificationAttemptExpireAfter} seconds and ${verificationAttempts} attempts.`}
    </AlertComponent>
  )
};

export default TimerComponent;
