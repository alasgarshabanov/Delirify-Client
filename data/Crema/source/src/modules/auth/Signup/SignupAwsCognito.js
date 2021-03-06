import React from 'react';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import {Checkbox} from '@material-ui/core';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch} from 'react-redux';
import {Auth} from 'aws-amplify';
import InfoView from '@crema/core/InfoView';
import {onSignUpCognitoUser} from '../../../redux/actions';
import {Link, useHistory} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Fonts} from '../../../shared/constants/AppEnums';
import {GridContainer} from '../../../@crema';
import Grid from '@material-ui/core/Grid';

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
  confirmPassword: yup
    .string()
    .required(<IntlMessages id='validation.reTypePassword' />),
});

const SignupAwsCognito = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const useStyles = makeStyles(theme => ({
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
      marginBottom: 10,
      marginLeft: -48,
      marginRight: -48,
      [theme.breakpoints.up('xl')]: {
        marginBottom: 20,
      },
    },
    iconButtonRoot: {
      marginLeft: 8,
      marginRight: 8,
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
      pt={{xs: 5, xl: 8}}
      flex={1}
      display='flex'
      flexDirection='column'>
      <Formik
        validateOnChange={true}
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, setErrors}) => {
          if (data.password !== data.confirmPassword) {
            setErrors({
              confirmPassword: (
                <IntlMessages id='validation.passwordMisMatch' />
              ),
            });
          } else {
            setSubmitting(true);
            dispatch(
              onSignUpCognitoUser(
                {email: data.email, password: data.password, name: data.name},
                history,
              ),
            );
            setSubmitting(false);
          }
        }}>
        {({isSubmitting}) => (
          <Form className={classes.formRoot} noValidate autoComplete='off'>
            <Box mb={{xs: 5, xl: 8}}>
              <MyTextField
                label={<IntlMessages id='common.name' />}
                name='name'
                variant='outlined'
                className={classes.myTextFieldRoot}
              />
            </Box>

            <Box mb={{xs: 5, xl: 8}}>
              <MyTextField
                label={<IntlMessages id='common.email' />}
                name='email'
                variant='outlined'
                className={classes.myTextFieldRoot}
              />
            </Box>

            <GridContainer>
              <Grid item xs={12} md={6}>
                <Box mb={{xs: 5, xl: 8}}>
                  <MyTextField
                    label={<IntlMessages id='common.password' />}
                    name='password'
                    type='password'
                    variant='outlined'
                    className={classes.myTextFieldRoot}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box mb={{xs: 4, xl: 8}}>
                  <MyTextField
                    label={<IntlMessages id='common.retypePassword' />}
                    name='confirmPassword'
                    type='password'
                    variant='outlined'
                    className={classes.myTextFieldRoot}
                  />
                </Box>
              </Grid>
            </GridContainer>

            <Box
              mb={{xs: 4, xl: 6}}
              display='flex'
              alignItems='center'
              fontSize={18}>
              <Box display='flex' alignItems='center'>
                <Checkbox className={classes.checkboxRoot} />
                <Box component='span' mr={2} fontSize={18}>
                  <IntlMessages id='common.iAgreeTo' />
                </Box>
              </Box>
              <Box
                component='span'
                color='primary.main'
                fontSize={18}
                className={classes.pointer}>
                <IntlMessages id='common.termConditions' />
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
                disabled={isSubmitting}
                className={classes.btnRoot}
                type='submit'>
                <IntlMessages id='common.signup' />
              </Button>

              <Box
                color='text.secondary'
                ml={{sm: 4}}
                mt={{xs: 3, sm: 0}}
                fontSize={18}>
                <Box component='span' mr={1}>
                  <IntlMessages id='common.alreadyHaveAccount' />
                </Box>
                <Box component='span'>
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
        <Box component='span' color='text.secondary' mr={4} fontSize={18}>
          <IntlMessages id='auth.orSignupWith' />
        </Box>
        <Box display='flex' alignItems='center'>
          <IconButton
            className={classes.iconButtonRoot}
            onClick={() => Auth.federatedSignIn({provider: 'Google'})}>
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
            onClick={() => Auth.federatedSignIn({provider: 'Facebook'})}>
            <FacebookIcon className={classes.textPrimary} />
          </IconButton>
        </Box>
      </Box>

      <InfoView />
    </Box>
  );
};

export default SignupAwsCognito;
