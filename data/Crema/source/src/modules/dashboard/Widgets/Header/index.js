import React from 'react';
import {Card} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import {Fonts} from '../../../../shared/constants/AppEnums';

const Header = props => {
  const useStyles = makeStyles(theme => ({
    imageCard: {
      backgroundImage: `url(https://via.placeholder.com/650x365)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      color: 'white',
      position: 'relative',

      '&:before': {
        content: '""',
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: 1,
        width: '100%',
        height: '100%',
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
      },

      '& > *': {
        position: 'relative',
        zIndex: 3,
      },
    },
    colorBtn: {
      fontFamily: Fonts.BOLD,
      fontSize: 14,
      marginRight: 16,
    },
    outlineBtn: {
      fontFamily: Fonts.BOLD,
      fontSize: 14,
      border: '1px solid',
      borderColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.contrastText,
    },
  }));

  const classes = useStyles(props);

  return (
    <Box py={{xs: 5, sm: 5, xl: 5}} px={{xs: 6, sm: 6, xl: 6}} height='1' clone>
      <Card className={classes.imageCard}>
        <Box
          width={{xs: '100%', lg: '70%', xl: '50%'}}
          height={'100%'}
          display='flex'
          flexDirection='column'>
          <Box
            component='h3'
            mb={4}
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 18, sm: 20, xl: 24}}>
            <IntlMessages id='dashboard.jombie' />
          </Box>

          <Box
            component='p'
            color='grey.500'
            mb={4}
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 16, xl: 18}}>
            <IntlMessages id='dashboard.jombieContent' />
          </Box>

          <Box pt={3} mt={'auto'} display='flex' alignItems='center'>
            <Button
              variant='contained'
              color='primary'
              className={classes.colorBtn}>
              <IntlMessages id='dashboard.getStarted' />
            </Button>
            <Button variant='outlined' className={classes.outlineBtn}>
              <IntlMessages id='dashboard.readMore' />
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Header;
