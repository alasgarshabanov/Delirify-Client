import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';

import InfoView from '@crema/core/InfoView';
import {onJwtSignIn} from '../../../redux/actions';
import {Link, useHistory} from 'react-router-dom';
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

const UserSignin = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onGoToForgetPassword = () => {
    history.push('/forget-password', {tab: 'auth'});
  };

  const {messages} = useIntl();

  const useStyles = makeStyles(theme => ({
    root: {
      minWidth: 250,
      [theme.breakpoints.up('sm')]: {
        minWidth: 300,
      },
      [theme.breakpoints.up('md')]: {
        minWidth: 300,
      },
      [theme.breakpoints.up('lg')]: {
        minWidth: 380,
      },
      [theme.breakpoints.up('xl')]: {
        minWidth: 450,
      },
    },
    formRoot: {
      textAlign: 'left',
    },
    myTextFieldRoot: {
      width: '100%',
    },
    pointer: {
      cursor: 'pointer',
    },
    btnRoot: {
      borderRadius: 30,
      width: '100%',
      fontFamily: Fonts.BOLD,
      fontSize: 20,
      textTransform: 'capitalize',
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
      className={classes.root}
      flex={1}
      display='flex'
      flexDirection='column'>
      <Formik
        validateOnChange={true}
        initialValues={{
          email: 'demo@example.com',
          password: 'demo#367',
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
            <Box mb={{xs: 5, xl: 6}}>
              <MyTextField
                placeholder={messages['common.email']}
                name='email'
                label={<IntlMessages id='common.email' />}
                variant='outlined'
                className={classes.myTextFieldRoot}
              />
            </Box>

            <Box mb={{xs: 4, xl: 6}}>
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
              textAlign='right'
              mb={{xs: 4, xl: 6}}
              fontSize={{xs: 16, xl: 18}}>
              <Box
                color='primary.main'
                component='span'
                className={classes.pointer}
                onClick={onGoToForgetPassword}>
                <IntlMessages id='common.forgetPassword' />
              </Box>
            </Box>

            <Box textAlign='center'>
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                disabled={isSubmitting}
                className={classes.btnRoot}>
                <IntlMessages id='common.login' />
              </Button>

              <Box
                mt={{xs: 4, xl: 6}}
                color='text.secondary'
                fontSize={{xs: 16, xl: 18}}>
                <Box component='span' mr={2}>
                  <IntlMessages id='common.dontHaveAccount' />
                </Box>
                <Box component='span' fontFamily={Fonts.BOLD}>
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

      <InfoView />
    </Box>
  );
};

export default UserSignin;
