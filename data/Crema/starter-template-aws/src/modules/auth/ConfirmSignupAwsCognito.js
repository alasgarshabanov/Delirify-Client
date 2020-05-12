import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import ReactCodeInput from 'react-code-input';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {fetchError, onConfirmCognitoUserSignup} from '../../redux/actions';
import InfoView from '@crema/core/InfoView';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IntlMessages from '../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import {makeStyles} from '@material-ui/core';
import {Fonts} from '../../shared/constants/AppEnums';

const ConfirmSignupAwsCognito = props => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [pin, setPin] = useState('');

  const {messages} = useIntl();

  const handleSubmit = () => {
    const {email} = props.location.state || {};
    if (email && pin.length === 6) {
      dispatch(onConfirmCognitoUserSignup(email, pin, history));
    } else if (!email) {
      history.push('/signup');
      fetchError(messages['validation.tryAgain']);
    } else {
      fetchError(messages['validation.pinLength']);
    }
  };

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
          <IntlMessages id='common.emailVerification' />
        </Box>

        <Card className={classes.cardRoot}>
          <Box mb={{xs: 5, xl: 10}} fontSize={18}>
            <Typography>
              <IntlMessages id='common.verificationMessage' />
            </Typography>
          </Box>

          <Box mb={{xs: 6, xl: 10}}>
            <ReactCodeInput
              type='password'
              value={pin}
              fields={6}
              onChange={value => setPin(value)}
            />
          </Box>

          <Button
            variant='contained'
            color='primary'
            className={classes.btnRoot}
            onClick={handleSubmit}>
            <IntlMessages id='common.submit' />
          </Button>
          <InfoView />
        </Card>
      </Box>
    </Box>
  );
};

export default ConfirmSignupAwsCognito;
