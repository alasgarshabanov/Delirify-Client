import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import {makeStyles, Typography} from '@material-ui/core';
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
});

const ForgetPassword = () => {
  const useStyles = makeStyles(theme => ({
    logo: {
      height: 24,
    },
    card: {
      maxWidth: 576,
      width: '100%',
      textAlign: 'center',
      padding: 32,
      overflow: 'hidden',
      boxShadow:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      [theme.breakpoints.up('lg')]: {
        padding: 48,
      },
      [theme.breakpoints.up('xl')]: {
        padding: '48px 64px',
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
    },
  }));

  const classes = useStyles();
  return (
    <Box
      pb={6}
      py={{xl: 8}}
      display='flex'
      flex={1}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'>
      <Card className={classes.card}>
        <Box
          mb={{xs: 5, xl: 8}}
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <Box mr={2}>
            <img
              className={classes.logo}
              src={require('assets/images/logo-icon-large.png')}
              alt='crema'
              title='crema'
            />
          </Box>
          <Box
            mb={1}
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 20, sm: 20, xl: 24}}>
            <IntlMessages id='common.forgetPassword' />
          </Box>
        </Box>

        <Box mb={{xs: 6, xl: 12}} fontSize={{xs: 16, xl: 18}}>
          <Typography>
            <IntlMessages id='common.forgetPasswordTextOne' />
          </Typography>
          <Typography component='p'>
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
            resetForm();
          }}>
          {({isSubmitting}) => (
            <Form className={classes.form}>
              <Box mb={{xs: 5, lg: 8, xl: 12}}>
                <MyTextField
                  name='email'
                  label={<IntlMessages id='common.emailAddress' />}
                  className={classes.textField}
                  variant='outlined'
                />
              </Box>

              <Button
                variant='contained'
                color='primary'
                disabled={isSubmitting}
                className={classes.button}
                type='submit'>
                <IntlMessages id='common.sendNewPassword' />
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
};

export default ForgetPassword;
