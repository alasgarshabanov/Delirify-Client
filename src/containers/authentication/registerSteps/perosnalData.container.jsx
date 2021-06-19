import React, {useEffect, useState} from "react";
import { useIntl } from "react-intl";
import {
  Grid, TextField, FormControlLabel, Link, Checkbox, FormHelperText, Box, Button
} from "@material-ui/core";
import { object, string, bool } from 'yup';
import DialogComponent from "../../../components/dialog/dialog.component";
import useFetch from '../../../hooks/useFetch.hook';
import {registrationActions, useRegistrationContext} from "../../../contexts/providers/registration.context";
import {useAppContext} from "../../../contexts/providers/app.context";
import LoadingComponent from "../../../components/ui/loadin.component";
import ActionAlertComponent from "../../../components/ui/actionAlert.component";

const formInitialState = {
  name: '',
  surname: '',
  email: '',
  password: '',
  userType: '',
  termsAccepted: false
};
const notificationInitialState = { hasNotificationMessage: false, type: 'error', message: '' };

const PersonalData = props => {
  const { classes, translations } = props;
  const {formatMessage: t} = useIntl();
  const [registrationState, dispatch] = useRegistrationContext();
  const [appState] = useAppContext();
  const [{ response, error, isLoading }, doFetch] = useFetch();
  const [form, setForm] = useState(formInitialState);
  const [values, setValues] = useState({
    errors: {},
    notification: notificationInitialState,
    touchedFields: {},
    showTerms: false
  });

  const { name, surname, email, password, termsAccepted} = form;
  const { errors, notification, touchedFields, showTerms } = values;

  let validations = {
    name: string().required('Name is required'),
    surname: string().required('Surname field is required'),
    email: string().email('Not valid email')
      .required('Field is required'),
    password: string().required('Password is required')
      .min(6, 'Password min length is 6 characters'),
    // userType: number().oneOf([1, 3], 'Please select one of user types')
    //   .required('User type selection is required'),
    termsAccepted: bool().oneOf([true], 'You have to read and accept terms')
  };

  let fullValidationSchema = object().shape({
    name: validations.name,
    surname: validations.surname,
    password: validations.password,
    email: validations.email,
    // userType: validations.userType,
    termsAccepted: validations.termsAccepted
  });

  useEffect(() => {
    if (response) {
      if (typeof response.data !== 'undefined') {
        const { data, errors } = response;
        if (errors) {
          let message = errors.map((err) => {
            return err.message;
          })
          setValues({...values, notification: { hasNotificationMessage: true, type: 'error', message }})
        }
        if (data) {
          const { registerUser } = data;
          if (registerUser) {
            const { user, success, message } = registerUser;
            if (user && success) {
              const { email, username, publicId, userProfile: {name, surname} } = user;
              setValues({...values, notification: { hasNotificationMessage: true, type: 'success', message }})
              setTimeout(() => {
                setValues({...values, notification: notificationInitialState })
                if (name && surname && username && email && publicId) {
                  dispatch({
                    type: registrationActions.ACTION_USER_FILLED_PERSONAL_DATA,
                    payload: {
                      name, surname, username, email, publicId
                    }
                  });
                }
              }, 2000)
            }
            if (!success && message) {
              setValues({...values, notification: { hasNotificationMessage: true, type: 'error', message }})
            }
          }
          else {
          }
        }
      }
    }

    if (error) {
      let message = '';
      if (typeof error === 'object') {
        message = error.map((err) => {
          return err.message || '';
        });
      } else
        message = JSON.stringify(error);

      if (!notification.hasNotificationMessage)
        setValues({...values, notification: {hasNotificationMessage: true, type: "error", message }});
    }

  }, [error, response, dispatch]); // adding values cause error

  const handleOnChange = ev => {
    const name = ev.target.name;
    const value = name === 'termsAccepted'
      ? !termsAccepted
      : ev.target.value;

    validations[name].validate(value)
      .then(function(valid) {
        if (valid) {
          delete errors[name];
          setValues({
            ...values,
            errors: {},
            notification: notificationInitialState,
            touchedFields: {...touchedFields, [name]: true}}
          );
        }
      })
      .catch((err) => {
        setValues({
          ...values, touchedFields: {...touchedFields, [name]: true},
          errors: {...errors, [name]: err.message }}
        );
      });

    setForm({...form, [name]: value});
  };

  /**
   * Submit to the next screen
   * @param ev
   */
  const handleNext = ev => {
    ev.preventDefault();

    fullValidationSchema.validate({ name, surname, password, email, termsAccepted })
      .then(() => {
        setUserData();
      }).catch((err) => {
      setValues({...values, error: { type:'error', message: err.message }});
    });
  };

  const handleCloseAlert = () => {
    setValues({ ...values, error: {},  notification: notificationInitialState });
  };

  const setUserData = () => {
    doFetch({
      data: {
        query:`mutation RegisterUser($userData: UserRegisterInput!) {
          registerUser(userData: $userData) {
            errors{
              message
            }
            notifications{
              message
              type
            }
            user {
              publicId
              email
              username
              userProfile {
                name
                surname
              }
            }
          }
        }`,
        variables: {
          userData: {
            name, surname, password, email, termsAccepted,
            mobile: registrationState.mobile,
            isMobileVerified: registrationState.mobileVerified,
            isEmailVerified: false,
            locale: appState.locale
          }
        }
      }
    })
  };

  const handleShowTerms = () => {
    setValues({ ...values, showTerms: !showTerms });
  };

  const getTermsQuery = {
    query: `query GetPageTranslation($id: Int!, $locale: String) {
      getPageTranslation(pageId: $id, locale: $locale) {
        success
        page {
          title
          body
        }
      }
    }`,
    variables: {
      "id": 8,
      "locale": "az"
    }
  };

  return(
    <div>
      {
        notification.hasNotificationMessage &&
        <ActionAlertComponent message={notification.message} severity={notification.type} onClose={handleCloseAlert} />
      }
      { isLoading && <LoadingComponent /> }
      { (!isLoading && !notification.hasNotificationMessage) && (
        <Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                name="name"
                required={true}
                fullWidth
                label="Name"
                className={classes.formField}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="surname"
                required
                fullWidth
                name="surname"
                label="Surname" className={classes.formField}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                className={classes.formField}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="passowrd"
                required
                fullWidth
                type="password"
                label="Password"
                name="password"
                className={classes.formField}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control = {
                  <Checkbox
                    required
                    id='termsAccepted'
                    name='termsAccepted'
                    value={termsAccepted}
                    color="primary"
                    onChange={handleOnChange}
                  />
                }
                label={t(
                  {id:"ACCEPT_TERMS_AND_CONDITIONS"},
                  {
                    a: msg => (
                      <span
                        key={33}
                        className="external-link"
                        data-url="terms"
                      >
                      {msg}
                    </span>
                    )
                  })}
              />
              (<Link href="#" onClick={handleShowTerms} > Terms and conditions </Link>)
              {touchedFields.termsAccepted && errors.termsAccepted
                ? <FormHelperText> {errors.termsAccepted} </FormHelperText> : ''
              }
              { showTerms && <DialogComponent visible={ showTerms } getContentQuery={ getTermsQuery } /> }
            </Grid>
          </Grid>
          <div className={ classes.actionsContainer }>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
              disabled={errors && Object.entries(errors).length > 0}
            >
              {translations.TEXT_NEXT}
            </Button>
          </div>
        </Box>
      )
      }
    </div>
  )
};

export default PersonalData;
