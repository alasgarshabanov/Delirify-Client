import React from 'react';
import TextField from '@material-ui/core/TextField';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import {Checkbox} from '@material-ui/core';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch} from 'react-redux';
import InfoView from '@crema/core/InfoView';
import {
  onSignInFirebaseUser,
  signInUserWithFacebook,
  signInUserWithGithub,
  signInUserWithGoogle,
  signInUserWithTwitter,
} from '../../../redux/actions';
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

const SigninFirebase = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onGoToForgetPassword = () => {
    history.push('/forget-password', {tab: 'firebase'});
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
    dividerRoot: {
      marginBottom: 16,
      marginLeft: -48,
      marginRight: -48,
      [theme.breakpoints.up('xl')]: {
        marginBottom: 32,
      },
    },
    iconButtonRoot: {
      marginLeft: 4,
      marginRight: 4,
      [theme.breakpoints.up('sm')]: {
        marginLeft: 8,
        marginRight: 8,
      },
    },
    textLg: {
      fontSize: 18,
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
          password: 'Pass@1!@all',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting}) => {
          setSubmitting(true);
          dispatch(onSignInFirebaseUser(data.email, data.password), history);
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

            <Box mb={{xs: 5, lg: 6}}>
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
                color='secondary'
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

      <Box
        display='flex'
        flexDirection={{xs: 'column', sm: 'row'}}
        justifyContent='center'
        alignItems='center'>
        <Box component='span' color='text.secondary' mr={{sm: 4}} fontSize={18}>
          <IntlMessages id='common.orLoginWith' />
        </Box>
        <Box display='flex' alignItems='center'>
          <IconButton
            className={classes.iconButtonRoot}
            onClick={() => dispatch(signInUserWithGoogle())}>
            <i
              className={clsx(
                classes.textLg,
                classes.textPrimary,
                'zmdi zmdi-google',
              )}
            />
          </IconButton>
          <IconButton
            className={classes.iconButtonRoot}
            onClick={() => dispatch(signInUserWithFacebook())}>
            <FacebookIcon className={classes.textPrimary} />
          </IconButton>
          <IconButton
            className={classes.iconButtonRoot}
            onClick={() => dispatch(signInUserWithGithub())}>
            <GitHubIcon className={classes.textPrimary} />
          </IconButton>
          <IconButton
            className={classes.iconButtonRoot}
            onClick={() => dispatch(signInUserWithTwitter())}>
            <TwitterIcon className={classes.textPrimary} />
          </IconButton>
        </Box>
      </Box>

      <InfoView />
    </Box>
  );
};

export default SigninFirebase;
