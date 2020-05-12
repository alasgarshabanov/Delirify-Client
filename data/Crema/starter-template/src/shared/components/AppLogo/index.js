import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Fonts} from '../../constants/AppEnums';

const AppLogo = () => {
  const useStyles = makeStyles(() => ({
    logoRoot: {
      display: 'flex',
      flexDirection: 'row',
      cursor: 'pointer',
      alignItems: 'center',
    },
    logo: {
      height: 24,
      marginRight: 10,
    },
  }));
  const classes = useStyles();
  return (
    <Box className={classes.logoRoot}>
      <img
        className={classes.logo}
        src={require('assets/images/logo.png')}
        alt='crema-logo'
      />
      <Box
        color='textPrimary'
        component='h2'
        mr={5}
        fontSize={{xs: 18, lg: 20}}
        fontFamily={Fonts.MEDIUM}>
        Crema
      </Box>
    </Box>
  );
};

export default AppLogo;
