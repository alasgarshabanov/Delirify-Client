import React from 'react';
import UserSignup from './UserSignup';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import {Fonts} from '../../../shared/constants/AppEnums';
import RightSlider from '../RightSlider';
import Background from '../../../assets/images/auth-background.jpg';
import AppLogo from '../../../shared/components/AppLogo';

const Signup = props => {
  const useStyles = makeStyles(theme => ({
    imgRoot: {
      cursor: 'pointer',
      display: 'inline-block',
      height: 24,
      [theme.breakpoints.up('sm')]: {
        height: 30,
      },
    },
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
        fontSize: 16,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    pointer: {
      cursor: 'pointer',
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
  const classes = useStyles(props);

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
            <UserSignup />
          </Box>
        </Box>
        <Box className={classes.authRight}>
          <RightSlider />
        </Box>
      </Card>
    </Box>
  );
};

export default Signup;
