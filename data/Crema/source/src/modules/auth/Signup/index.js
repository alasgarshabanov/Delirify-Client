import React, {useState} from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import SignupAwsCognito from './SignupAwsCognito';
import SignupJwtAuth from './SignupJwtAuth';
import SignupFirebase from './SignupFirebase';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {makeStyles} from '@material-ui/core/styles';
import {Fonts} from '../../../shared/constants/AppEnums';

const Signup = props => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = index => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const useStyles = makeStyles(theme => ({
    imgRoot: {
      cursor: 'pointer',
      display: 'inline-block',
    },
    cardRoot: {
      maxWidth: '40rem',
      width: '100%',
      overflow: 'hidden',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      padding: '10px 24px',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 32,
        paddingRight: 32,
      },
      [theme.breakpoints.up('xl')]: {
        paddingtop: 24,
        paddingBottom: 32,
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
    muiTabsFull: {
      marginLeft: 0,
      marginRight: 0,
      [theme.breakpoints.up('sm')]: {
        marginLeft: -32,
        marginRight: -32,
      },
      '& .MuiTabs-flexContainer': {
        '& .MuiTab-root': {
          flex: 1,
        },
      },
    },
    muiTab: {
      fontFamily: Fonts.BOLD,
      fontSize: 14,
      paddingBottom: 16,
      paddingTop: 16,
      marginLeft: 8,
      marginRight: 8,
      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 20,
      },
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
  }));
  const classes = useStyles(props);

  return (
    <Box pb={8} px={{md: 6}} flex={1} display='flex' flexDirection='column'>
      <Box mb={4} mt={{xl: 4}} textAlign={{xs: 'center', sm: 'left'}}>
        <img
          className={classes.imgRoot}
          src={require('assets/images/logo-white-with-name.png')}
          alt='crema-logo'
        />
      </Box>

      <Box
        mt={{lg: -14, xl: -6}}
        flex={1}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <Box
          component='h2'
          mb={{xs: 6, xl: 8}}
          color='primary.contrastText'
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 24, xl: 30}}
          className={classes.textUppercase}>
          <IntlMessages id='common.signup' />
        </Box>

        <Card className={classes.cardRoot}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            aria-label='simple tabs example'
            className={classes.muiTabsFull}>
            <Tab
              className={classes.muiTab}
              label='aws cognito'
              {...a11yProps(1)}
            />
            <Tab
              className={classes.muiTab}
              label='jwt auth'
              {...a11yProps(2)}
            />
            <Tab
              className={classes.muiTab}
              label='firebase'
              {...a11yProps(0)}
            />
          </Tabs>

          <>
            {value === 0 && <SignupFirebase />}
            {value === 1 && <SignupAwsCognito />}
            {value === 2 && <SignupJwtAuth />}
          </>
        </Card>
      </Box>
    </Box>
  );
};

export default Signup;
