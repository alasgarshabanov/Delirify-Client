import React from 'react';
import {Card} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Fonts} from '../../../../shared/constants/AppEnums';

const StatsCard = ({icon, bgColor, text, value}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      height: 50,
      width: 50,
      backgroundColor: bgColor,
      [theme.breakpoints.up('md')]: {
        height: 60,
        width: 60,
      },
      [theme.breakpoints.up('lg')]: {
        height: 70,
        width: 70,
      },
      [theme.breakpoints.up('xl')]: {
        height: 85,
        width: 85,
      },
    },
  }));
  const classes = useStyles();
  return (
    <Box p={{xs: 4, md: 5, lg: 6, xl: 8}} textAlign='center' height={1} clone>
      <Card>
        <Box
          display='flex'
          p={{xs: 3, xl: 4}}
          mb={{xs: 4, md: 5}}
          mx='auto'
          clone>
          <Avatar className={classes.root}>
            <img src={icon} alt='' />
          </Avatar>
        </Box>
        <Box component='p' color='grey.500' mb={2} fontSize={{xs: 16, xl: 18}}>
          {text}
        </Box>
        <Box
          component='h3'
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}>
          {value}
        </Box>
      </Card>
    </Box>
  );
};

export default StatsCard;

StatsCard.defaultProps = {
  bgColor: '',
  value: '',
};

StatsCard.propTypes = {
  text: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  value: PropTypes.string,
};
