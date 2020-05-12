import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import InfoView from '@crema/core/InfoView';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {onForgetPasswordFirebaseUser} from '../../../redux/actions';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {makeStyles} from '@material-ui/core';
import {Fonts} from '../../../shared/constants/AppEnums';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

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
});

const ForgetPasswordFirebase = () => {
  const dispatch = useDispatch();

  const useStyles = makeStyles(theme => ({
    image: {
      display: 'inline-block',
      cursor: 'pointer',
    },
    card: {
      maxWidth: 576,
      width: '100%',
      textAlign: 'center',
      padding: 24,
      overflow: 'hidden',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      [theme.breakpoints.up('sm')]: {
        padding: 40,
      },
      [theme.breakpoints.up('md')]: {
        padding: 48,
      },
      [theme.breakpoints.up('xl')]: {
        paddingLeft: 48,
        paddingRight: 48,
      },
    },
    form: {
      textAlign: 'left',
    },
    textField: {
      width: '100%',
    },
    button: {
      width: '100%',
      fontFamily: Fonts.BOLD,
      textTransform: 'capitalize',
      fontSize: 16,
      paddingTop: 12,
      paddingBottom: 12,
      borderRadius: '30px',
      [theme.breakpoints.up('xl')]: {
        fontSize: 20,
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
    },
    textSecondary: {
      color: theme.palette.primary.main,
      marginLeft: 10,
    },
    underlineNone: {
      textDecoration: 'none',
    },
  }));

  const classes = useStyles();

  return (
    <Box pb={8} px={{md: 6}} display='flex' flex={1} flexDirection='column'>
      <Box mb={4} mt={{xl: 4}} textAlign={{xs: 'center', sm: 'left'}}>
        <img
          className={classes.image}
          src={require('assets/images/logo-white-with-name.png')}
          alt='crema-logo'
        />
      </Box>

      <Box
        display='flex'
        flex={1}
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <Box
          component='h2'
          mb={{xs: 6, xl: 8}}
          color='text.white'
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 24, sm: 30}}
          textTransform='uppercase'>
          <IntlMessages id='common.forgetPassword' />
        </Box>

        <Card className={classes.card}>
          <Box mb={{xs: 6, xl: 12}} fontSize={18}>
            <Typography>
              <IntlMessages id='common.forgetPasswordTextOne' /> <br />
              <IntlMessages id='common.forgetPasswordTextTwo' />
            </Typography>
          </Box>

          <Formik
            validateOnChange={true}
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, {setSubmitting, resetForm}) => {
              setSubmitting(true);
              dispatch(onForgetPasswordFirebaseUser(data.email));
              setSubmitting(false);
              resetForm();
            }}>
            {({isSubmitting}) => (
              <Form className={classes.form}>
                <Box mb={{xs: 5, lg: 8}}>
                  <MyTextField
                    placeholder='Email'
                    name='email'
                    label={<IntlMessages id='common.emailAddress' />}
                    className={classes.textField}
                    variant='outlined'
                  />
                </Box>
                <Box mb={4}>
                  <Button
                    variant='contained'
                    color='primary'
                    disabled={isSubmitting}
                    className={classes.button}
                    type='submit'>
                    <IntlMessages id='common.sendNewPassword' />
                  </Button>
                </Box>

                <Box textAlign='center' fontSize={16} color='text.secondary'>
                  <IntlMessages id='common.alreadyHavePassword' />
                  <Link
                    to='/signin'
                    className={clsx(
                      classes.underlineNone,
                      classes.textSecondary,
                    )}>
                    <IntlMessages id='common.signIn' />
                  </Link>
                </Box>
              </Form>
            )}
          </Formik>

          <InfoView />
        </Card>
      </Box>
    </Box>
  );
};

export default ForgetPasswordFirebase;
