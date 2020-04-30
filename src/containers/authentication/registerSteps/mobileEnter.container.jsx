import React, {useEffect, useState} from 'react';
import { useIntl } from "react-intl";
import { Box, Grid, Button, TextField } from "@material-ui/core";
import InputMask from "react-input-mask";
import {registrationActions, useRegistrationContext} from "../../../contexts/providers/registration.context";
import useFetch from "../../../hooks/useFetch.hook";
import LoadingComponent from "../../../components/ui/loadin.component";
import TimerComponent from "../../../components/timer/timer.component";
import {SMS_CODE_VERIFICATION_EXPIRE_SECONDS} from "../../../config";
import ActionAlertComponent from "../../../components/ui/actionAlert.component";


const MobileEnterContainer = props => {
  const {classes, translations} = props;
  const {formatMessage: t} = useIntl();
  const [registerState, dispatch] = useRegistrationContext();
  const { innerStep, mobileVerified, verificationAttempts, verificationAttemptExpireAfter } = registerState;

  const [mobileNumber, setMobileNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [{ isLoading, response, error }, doFetch] = useFetch();

  const {TEXT_NEXT} = translations;
  const mobilePattern = new RegExp(/\(\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/g);
  const verificationCodePattern = new RegExp(/\d\s\d\s\d\s\d$/g);
  const trimNonRequiredCharacters = /[\s()-]+/gi;

  const TEXT_MOBILE_NUMBER = t({ id: "MOBILE_NUMBER", defaultMessage: "Mobile Number"});


  // Will control verification expired time, could not send mobile before 180 seconds expired
  useEffect(() => {
    if (verificationAttempts === 0 || verificationAttemptExpireAfter === 1) {
      setErrorMessage('');
      setSuccessMessage('');
      setMobileNumber('');
      dispatch({ type: registrationActions.RESET_A_WHOLE_FORM });
    }

  }, [dispatch, verificationAttempts, verificationAttemptExpireAfter]);

  // Mostly will control response from the server
  useEffect(() => {

    if (response) {
      setErrorMessage('');
      if (typeof response.data !== 'undefined') {
        const { data } = response;
        if (typeof data.generateVerificationCode !== 'undefined') {
          const { generateVerificationCode } = data;
          if (generateVerificationCode) {
            if (generateVerificationCode.ok) {
              setSuccessMessage(generateVerificationCode.message);
              dispatch({ type: registrationActions.REFRESH_TIMER });
              dispatch({ type: registrationActions.NEXT_INNER_STEP });
              dispatch({ type: registrationActions.TIMER_COUNTDOWN_START });
            } else {
              setErrorMessage(generateVerificationCode.message);
            }
          }
        }

        if (typeof data.checkVerificationCode !== 'undefined') {
          const { checkVerificationCode } = data;
          if (checkVerificationCode) {
            if (checkVerificationCode.ok) {
              dispatch({ type: registrationActions.ACTION_MOBILE_NUMBER_VERIFIED});
              dispatch({ type: registrationActions.NEXT_STEP });
            } else {
              if (verificationAttempts > 0 && innerStep === 1)
                setErrorMessage(checkVerificationCode.message);
            }
          }
        }
      }
    }

    if (error) {
      setSuccessMessage('');
      console.log('ERRO > >', error);
      setErrorMessage(JSON.stringify(error));
    }
  }, [error, response, dispatch]);

  /**
   * Handle Form Change
   * @param ev
   */
  const handleOnChange = (ev) => {
    setMobileNumber(ev.target.value);
    setErrorMessage('');
  };

  // Handle Next Button Click
  const handleNext = () => {

    // If mobile already verified, go to the next page
    if ( mobileVerified ) {
      dispatch({type: registrationActions.NEXT_STEP});
      return;
    }

    // If Mobile Enter form visible
    if (innerStep === 0) {
      if (!mobileNumber.match(mobilePattern)) {
        setErrorMessage('Mobile Number Not Correct');
        return;
      }

      generateTokenCode(mobileNumber)
        .then(res => {
          // If mobile sent
          dispatch({ type: registrationActions.SUCCESS_MOBILE_SENT });
        })
        .catch(err => {
          // If we have any error during sending mobile
          dispatch({type: registrationActions.FAILED_MOBILE_SENT});
          console.error(err)
        });
    } else {
      if (!verificationCodePattern.test(verificationCode))
        setErrorMessage('Please Enter Correct Code');

      dispatch({type: registrationActions.START_VERIFICATION_CODE_SENT});
      sendVerificationCode(verificationCode)
        .then(res => {
          dispatch({type: registrationActions.SUCCESS_VERIFICATION_CODE_SENT})
        })
        .catch(err => {
          dispatch({ type: registrationActions.FAILED_VERIFICATION_CODE_SENT });
          setErrorMessage(JSON.stringify(err))
        });
    }
  };

  const generateTokenCode = async (mobileNumber) => {
    const verifiedData = '+994' + mobileNumber.replace(trimNonRequiredCharacters, '');
    setMobileNumber(verifiedData);
    dispatch({
      type: registrationActions.START_MOBILE_SENT,
      payload: { mobile: verifiedData }
    });
    await doFetch({
      data: {
        query: `
          mutation GenerateCode($verifiedData: String!) {
            generateVerificationCode (verifiedData: $verifiedData) {
              ok
              message
            }
          }
        `,
        variables: {
          "verifiedData": verifiedData
        }
      }
    });
  };

  const handleOnVerificationCodeChange = (ev) => {
    const value = ev.target.value;
    setVerificationCode(value.replace(trimNonRequiredCharacters, ''));
  };

  const sendVerificationCode = async (code) => {
    await doFetch({
      data: {
        query: `
          mutation CodeVerifierQuery($mobileNumber: String!, $verificationCode: String!) {
          checkVerificationCode(mobileNumber: $mobileNumber, verificationCode: $verificationCode) {
            ok
            message
          }
        }`,
        variables: {
          mobileNumber: mobileNumber,
          verificationCode: code
        }
      }
    });
  };

  return (
    <div>
      {isLoading && <LoadingComponent />}
      <Box>
        <Grid item xs={8}>
          {successMessage && <ActionAlertComponent xs={8} severity="success" message={successMessage} />}
          { errorMessage && (
            <ActionAlertComponent severity="error" xs={8} message={errorMessage} />
          )}
          { verificationAttemptExpireAfter < SMS_CODE_VERIFICATION_EXPIRE_SECONDS
            && <TimerComponent severity="info" /> }
          {innerStep === 0 &&
            <InputMask
              mask="(99) 999 99 99"
              value={mobileNumber}
              onChange={handleOnChange}
            >
              {() => <TextField
                variant="outlined"
                required
                fullWidth
                id="mobile-number"
                label={TEXT_MOBILE_NUMBER}
                name={'mobileNumber'}
                autoComplete="mobileNumber"
              />}
            </InputMask>
          }
          {innerStep === 1 && (
            <div>
              <InputMask
                mask="9 9 9 9"
                value={verificationCode}
                onChange={handleOnVerificationCodeChange}
              >
                {() => <TextField
                  variant="outlined"
                  required fullWidth
                  id="mobile-number"
                  label="Verification Code"
                />}
              </InputMask>
            </div>
          )}
        </Grid>
      </Box>
      <div className={ classes.actionsContainer }>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
        >
          {TEXT_NEXT}
        </Button>
      </div>
    </div>
  )
};

export default MobileEnterContainer;
