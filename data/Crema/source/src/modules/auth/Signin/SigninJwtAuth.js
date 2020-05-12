import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Checkbox} from '@material-ui/core';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';

import InfoView from '@crema/core/InfoView';
import {onJwtSignIn, onSignInAuth0User} from '../../../redux/actions';
import {Link, useHistory} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Fonts} from '../../../shared/constants/AppEnums';

const MyTextField = props => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  password: yup
    .string()
    .required(<IntlMessages id='validation.passwordRequired' />),
});

const SigninJwtAuth = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onGoToForgetPassword = () => {
    history.push('/forget-password', {tab: 'jwtAuth'});
  };

  const {messages} = useIntl();

  const useStyles = makeStyles(theme => ({
    formRoot: {
      textAlign: 'left',
      [theme.breakpoints.up('xl')]: {
        marginBottom: 24,
      },
    },
    myTextFieldRoot: {
      width: '100%',
    },
    checkboxRoot: {
      marginLeft: -12,
    },
    pointer: {
      cursor: 'pointer',
    },
    btnRoot: {
      borderRadius: 30,
      width: '10rem',
      fontFamily: Fonts.BOLD,
      fontSize: 16,
      textTransform: 'capitalize',
      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 20,
      },
    },
    btnRootFull: {
      width: '100%',
    },
    dividerRoot: {
      marginBottom: 16,
      marginLeft: -48,
      marginRight: -48,
      [theme.breakpoints.up('xl')]: {
        marginBottom: 32,
      },
    },
    textPrimary: {
      color: theme.palette.text.primary,
    },
    colorTextPrimary: {
      color: theme.palette.primary.main,
    },
    underlineNone: {
      textDecoration: 'none',
    },
  }));
  const classes = useStyles(props);

  return (
    <Box
      px={{xs: 0, sm: 4, xl: 8}}
      pt={{xs: 8, xl: 12}}
      flex={1}
      display='flex'
      flexDirection='column'>
      <Formik
        validateOnChange={true}
        initialValues={{
          email: 'crema.demo@gmail.com',
          password: 'P!@355',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting}) => {
          setSubmitting(true);
          dispatch(
            onJwtSignIn({email: data.email, password: data.password}),
            history,
          );
          setSubmitting(false);
        }}>
        {({isSubmitting}) => (
          <Form className={classes.formRoot} noValidate autoComplete='off'>
            <Box mb={{xs: 5, xl: 8}}>
              <MyTextField
                placeholder={messages['common.email']}
                name='email'
                label={<IntlMessages id='common.email' />}
                variant='outlined'
                className={classes.myTextFieldRoot}
              />
            </Box>

            <Box mb={{xs: 5, xl: 6}}>
              <MyTextField
                type='password'
                placeholder={messages['common.password']}
                label={<IntlMessages id='common.password' />}
                name='password'
                variant='outlined'
                className={classes.myTextFieldRoot}
              />
            </Box>

            <Box
              mb={{xs: 4, xl: 6}}
              display='flex'
              flexDirection={{xs: 'column', sm: 'row'}}
              alignItems={{sm: 'center'}}
              justifyContent={{sm: 'space-between'}}
              fontSize={18}>
              <Box display='flex' alignItems='center'>
                <Checkbox className={classes.checkboxRoot} />
                <Box component='span'>
                  <IntlMessages id='common.rememberMe' />
                </Box>
              </Box>
              <Box
                color='primary.main'
                component='span'
                ml={{sm: 4}}
                className={classes.pointer}
                onClick={onGoToForgetPassword}>
                <IntlMessages id='common.forgetPassword' />
              </Box>
            </Box>

            <Box
              mb={6}
              display='flex'
              flexDirection={{xs: 'column', sm: 'row'}}
              alignItems={{sm: 'center'}}
              justifyContent={{sm: 'space-between'}}>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                disabled={isSubmitting}
                className={classes.btnRoot}>
                <IntlMessages id='common.login' />
              </Button>

              <Box
                ml={{sm: 4}}
                mt={{xs: 3, sm: 0}}
                color='text.secondary'
                fontSize={18}>
                <Box component='span' mr={2}>
                  <IntlMessages id='common.dontHaveAccount' />
                </Box>
                <Box component='span'>
                  <Link
                    to='/signup'
                    className={clsx(
                      classes.underlineNone,
                      classes.colorTextPrimary,
                    )}>
                    <IntlMessages id='common.signup' />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>

      <Divider className={classes.dividerRoot} />

      <Box display='flex' justifyContent='center' alignItems='center'>
        <Button
          variant='contained'
          color='secondary'
          className={clsx(classes.btnRoot, classes.btnRootFull)}
          onClick={() => dispatch(onSignInAuth0User())}>
          <IntlMessages id='auth.loginWithAuth0' />
        </Button>
      </Box>

      <InfoView />
    </Box>
  );
};

export default SigninJwtAuth;
