import React from 'react';
import {Box, Card, makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import DayTemperature from './DayTemperature';
import {teal} from '@material-ui/core/colors';
import {Fonts} from '../../../../shared/constants/AppEnums';
import clsx from 'clsx';

const TemperatureCard = (props) => {
  const {temperatures} = props;

  const useStyles = makeStyles((theme) => ({
    pointer: {
      cursor: 'pointer',
    },
    block: {
      display: 'block',
    },
    textBase: {
      fontSize: 16,
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
    },
    textXl: {
      fontSize: 24,
      [theme.breakpoints.up('sm')]: {
        fontSize: 36,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 64,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 96,
      },
    },
    marginRight: {
      marginRight: 12,
    },
  }));

  const classes = useStyles(props);
  return (
    <Box display='flex' flexDirection='column' height='1' clone>
      <Card>
        <Box
          py={{xs: 5, sm: 5, xl: 5}}
          px={{xs: 6, sm: 6, xl: 6}}
          color='primary.contrastText'
          flex={1}
          bgcolor={teal[500]}
          display='flex'
          flexDirection='column'>
          <Box display='flex' alignItems='center'>
            <Box
              component='h3'
              fontFamily={Fonts.BOLD}
              fontSize={{xs: 18, sm: 20, xl: 24}}>
              <IntlMessages id='dashboard.newYork' />
            </Box>
            <Box ml='auto'>
              <SearchIcon className={clsx(classes.pointer, classes.block)} />
            </Box>
          </Box>

          <Box
            py={4}
            flex={1}
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            textAlign='center'>
            <Box
              component='h1'
              fontFamily={Fonts.BOLD}
              className={classes.textXl}>
              -32<sup>0</sup>
            </Box>
            <Box
              component='p'
              display='flex'
              alignItems='center'
              className={classes.textBase}>
              <img
                className={classes.marginRight}
                src={require('assets/images/weather/weather1.png')}
                alt='weather'
              />
              <IntlMessages id='dashboard.heavySnow' />
            </Box>
          </Box>
        </Box>

        <Box
          py={{xs: 5, sm: 5, xl: 5}}
          px={{xs: 6, sm: 6, xl: 6}}
          display='flex'
          justifyContent='space-between'>
          {temperatures.map((day) => {
            return <DayTemperature key={day.id} day={day} />;
          })}
        </Box>
      </Card>
    </Box>
  );
};

export default TemperatureCard;

TemperatureCard.defaultProps = {
  temperatures: [],
};

TemperatureCard.propTypes = {
  temperatures: PropTypes.array,
};
