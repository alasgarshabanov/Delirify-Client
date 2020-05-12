import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Checkbox} from '@material-ui/core';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';

import InfoView from '@crema/core/InfoView';
import {
  onSignUpFirebaseUser,
  signInUserWithFacebook,
  signInUserWithGithub,
  signInUserWithGoogle,
  signInUserWithTwitter,
} from '../../../redux/actions';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Fonts} from '../../../shared/constants/AppEnums';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

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
  name: yup.string().required(<IntlMessages id='validation.nameRequired' />),
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  password: yup
    .string()
    .required(<IntlMessages id='validation.passwordRequired' />),
});

const UserSignup = props => {
  const dispatch = useDispatch();

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
    checkboxRoot: {
      marginLeft: -12,
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
      marginTop: 16,
      marginBottom: 16,
    },
    iconButtonRoot: {
      marginLeft: 4,
      marginRight: 4,
      [theme.breakpoints.up('sm')]: {
        marginLeft: 8,
        marginRight: 8,
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
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setErrors, setSubmitting}) => {
          setSubmitting(true);
          console.log('data.email, ', data.email, data.password);
          dispatch(
            onSignUpFirebaseUser({
              email: data.email,
              password: data.password,
              name: data.name,
            }),
          );
          setSubmitting(false);
        }}>
        {({isSubmitting}) => (
          <Form className={classes.formRoot} noValidate autoComplete='off'>
            <Box mb={{xs: 4, xl: 6}}>
              <MyTextField
                label={<IntlMessages id='common.name' />}
                name='name'
                variant='outlined'
                className={classes.myTextFieldRoot}
              />
            </Box>

            <Box mb={{xs: 4, xl: 6}}>
              <MyTextField
                label={<IntlMessages id='common.email' />}
                name='email'
                variant='outlined'
                className={classes.myTextFieldRoot}
              />
            </Box>

            <Box mb={{xs: 4, xl: 6}}>
              <MyTextField
                label={<IntlMessages id='common.password' />}
                name='password'
                type='password'
                variant='outlined'
                className={classes.myTextFieldRoot}
              />
            </Box>

            <Box
              mb={{xs: 4, xl: 6}}
              display='flex'
              alignItems='center'
              fontSize={{xs: 16, xl: 18}}>
              <Box display='flex' alignItems='center'>
                <Checkbox className={classes.checkboxRoot} />
                <Box component='span' mr={2} fontSize={{xs: 16, xl: 18}}>
                  <IntlMessages id='common.iAgreeTo' />
                </Box>
              </Box>
              <Box
                component='span'
                color='primary.main'
                fontSize={{xs: 16, xl: 18}}
                className={classes.pointer}>
                <IntlMessages id='common.termConditions' />
              </Box>
            </Box>

            <Box textAlign='center' mb={6}>
              <Button
                variant='contained'
                color='secondary'
                disabled={isSubmitting}
                className={classes.btnRoot}
                type='submit'>
                <IntlMessages id='common.signup' />
              </Button>

              <Box
                mt={{xs: 4, xl: 6}}
                color='text.secondary'
                fontSize={{xs: 16, xl: 18}}>
                <Box component='span' mr={2}>
                  <IntlMessages id='common.alreadyHaveAccount' />
                </Box>
                <Box component='span' fontFamily={Fonts.BOLD}>
                  <Link
                    to='/signIn'
                    className={clsx(
                      classes.underlineNone,
                      classes.colorTextPrimary,
                    )}>
                    <IntlMessages id='common.signIn' />
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

export default UserSignup;
