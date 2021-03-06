import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';
import ReactCodeInput from 'react-code-input';
import {useDispatch} from 'react-redux';
import {fetchError, onSetNewCognitoPassword} from '../../redux/actions';
import {useHistory} from 'react-router-dom';
import InfoView from '@crema/core/InfoView';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../@crema/utility/IntlMessages';
import Typography from '@material-ui/core/Typography';
import {useIntl} from 'react-intl';
import {makeStyles} from '@material-ui/core/styles';
import {Fonts} from '../../shared/constants/AppEnums';

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
  newPassword: yup
    .string()
    .required(<IntlMessages id='validation.enterNewPassword' />),
  confirmPassword: yup
    .string()
    .required(<IntlMessages id='validation.reTypePassword' />),
});

const ResetPasswordAwsCognito = props => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [pin, setPin] = useState('');

  const {messages} = useIntl();

  const useStyles = makeStyles(theme => ({
    imgRoot: {
      cursor: 'pointer',
      display: 'inline-block',
    },
    cardRoot: {
      maxWidth: '32rem',
      width: '100%',
      overflow: 'hidden',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      padding: 24,
      [theme.breakpoints.up('sm')]: {
        padding: 40,
      },
      [theme.breakpoints.up('md')]: {
        padding: 48,
      },
      [theme.breakpoints.up('xl')]: {
        padding: 64,
      },
    },
    formRoot: {
      position: 'relative',
    },
    myTextFieldRoot: {
      width: '100%',
    },
    btnRoot: {
      borderRadius: 30,
      width: '100%',
      fontFamily: Fonts.BOLD,
      fontSize: 16,
      paddingTop: 12,
      paddingBottom: 12,
      textTransform: 'capitalize',
      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 20,
      },
    },
  }));
  const classes = useStyles(props);

  return (
    <Box pb={8} px={{md: 6}} flex={1} display='flex' flexDirection='column'>
      <Box mb={4} mt={{xl: 4}} textAlign={{xs: 'center', sm: 'left'}}>
        <img
          className={classes.imgRoot}
          src={require('assets/images/logo-white.png')}
          alt='crema-logo'
        />
      </Box>

      <Box
        flex={1}
        display='flex'
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
          <IntlMessages id='common.resetPassword' />
        </Box>

        <Card className={classes.cardRoot}>
          <Formik
            validateOnChange={true}
            initialValues={{
              oldPassword: '',
              newPassword: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, {setErrors, resetForm, setSubmitting}) => {
              const {email} = props.location.state;
              if (pin.length !== 6) {
                dispatch(fetchError(messages['validation.pinLength']));
              } else if (data.newPassword !== data.confirmPassword) {
                setErrors({
                  confirmPassword: (
                    <IntlMessages id='validation.passwordMisMatch' />
                  ),
                });
              } else {
                setSubmitting(true);
                dispatch(
                  onSetNewCognitoPassword(
                    email,
                    pin,
                    data.newPassword,
                    history,
                  ),
                );
                resetForm();
                setSubmitting(false);
              }
            }}>
            {({isSubmitting}) => (
              <Form className={classes.formRoot} noValidate autoComplete='off'>
                <Box mb={{xs: 5, lg: 8}}>
                  <Box mb={6} fontSize={{xs: 16, sm: 18}}>
                    <Typography>
                      <IntlMessages id='common.verificationMessage' />
                    </Typography>
                  </Box>

                  <ReactCodeInput
                    type='password'
                    value={pin}
                    fields={6}
                    onChange={value => setPin(value)}
                  />
                </Box>

                <Box mb={{xs: 5, lg: 8}}>
                  <MyTextField
                    name='newPassword'
                    label={<IntlMessages id='common.newPassword' />}
                    className={classes.myTextFieldRoot}
                    variant='outlined'
                    type='password'
                  />
                </Box>

                <Box mb={{xs: 5, lg: 8}}>
                  <MyTextField
                    name='confirmPassword'
                    label={<IntlMessages id='common.retypePassword' />}
                    className={classes.myTextFieldRoot}
                    variant='outlined'
                    type='password'
                  />
                </Box>

                <Button
                  variant='contained'
                  type='submit'
                  disabled={isSubmitting}
                  color='primary'
                  className={classes.btnRoot}>
                  <IntlMessages id='common.resetMyPassword' />
                </Button>
              </Form>
            )}
          </Formik>
          <InfoView />
        </Card>
      </Box>
    </Box>
  );
};

export default ResetPasswordAwsCognito;
