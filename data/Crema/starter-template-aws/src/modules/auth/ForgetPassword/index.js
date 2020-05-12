import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';
import {Link} from 'react-router-dom';
import InfoView from '@crema/core/InfoView';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {makeStyles} from '@material-ui/core';
import {Fonts} from '../../../shared/constants/AppEnums';
import clsx from 'clsx';
import Background from '../../../assets/images/auth-background.jpg';
import RightSlider from '../RightSlider';
import AppLogo from '../../../shared/components/AppLogo';
import {onResetCognitoPassword} from '../../../redux/actions';
import {useDispatch} from 'react-redux';

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
  const dispatch = useDispatch();
  const useStyles = makeStyles(theme => ({
    cardRoot: {
      maxWidth: '40rem',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      border: `1px solid ${theme.palette.grey[200]}`,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        maxWidth: '75rem',
        minHeight: 560,
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: '100rem',
        minHeight: 700,
      },
    },
    formRoot: {
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
      fontSize: 20,
      borderRadius: '30px',
    },
    textSecondary: {
      color: theme.palette.primary.main,
      marginLeft: 10,
    },
    underlineNone: {
      textDecoration: 'none',
    },
    authLeft: {
      width: '40%',
      padding: '50px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    authRight: {
      width: '60%',
      padding: '50px 20px',
      backgroundImage: `url(${Background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      color: theme.palette.background.paper,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  }));

  const classes = useStyles();

  return (
    <Box
      px={{md: 6}}
      flex={1}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      <Card className={classes.cardRoot}>
        <Box className={classes.authLeft}>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'>
            <Box
              mb={{xs: 10, xl: 15}}
              display='flex'
              alignItems='center'
              className={classes.pointer}>
              <AppLogo />
            </Box>
            <Box mb={{xs: 4, xl: 6}} fontSize={{xs: 16, xl: 18}}>
              <Typography>
                <IntlMessages id='common.forgetPasswordTextOne' /> <br />
                <IntlMessages id='common.forgetPasswordTextTwo' />
              </Typography>
            </Box>
            <Box className={classes.formRoot}>
              <Formik
                validateOnChange={true}
                initialValues={{
                  email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(data, {setSubmitting, resetForm}) => {
                  setSubmitting(true);
                  dispatch(onResetCognitoPassword(data.email));
                  setSubmitting(false);
                  resetForm();
                }}>
                {({isSubmitting}) => (
                  <Form className={classes.form}>
                    <Box mb={{xs: 4, lg: 6}}>
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
                        color='secondary'
                        disabled={isSubmitting}
                        className={classes.button}
                        type='submit'>
                        <IntlMessages id='common.sendNewPassword' />
                      </Button>
                    </Box>

                    <Box
                      textAlign='center'
                      fontSize={16}
                      color='text.secondary'>
                      <IntlMessages id='common.alreadyHavePassword' />
                      <Box component='span' fontFamily={Fonts.BOLD}>
                        <Link
                          to='/signin'
                          className={clsx(
                            classes.underlineNone,
                            classes.textSecondary,
                          )}>
                          <IntlMessages id='common.signIn' />
                        </Link>
                      </Box>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>

            <InfoView />
          </Box>
        </Box>
        <Box className={classes.authRight}>
          <RightSlider />
        </Box>
      </Card>
    </Box>
  );
};

export default ForgetPassword;
