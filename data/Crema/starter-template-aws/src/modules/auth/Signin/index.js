import React from 'react';
import UserSignin from './UserSignin';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import Background from '../../../assets/images/auth-background.jpg';
import RightSlider from '../RightSlider';
import AppLogo from '../../../shared/components/AppLogo';

const Signin = props => {
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
            <UserSignin />
          </Box>
        </Box>
        <Box className={classes.authRight}>
          <RightSlider />
        </Box>
      </Card>
    </Box>
  );
};

export default Signin;
