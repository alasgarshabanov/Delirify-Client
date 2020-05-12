import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import {Fonts} from '../../../../shared/constants/AppEnums';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  circularProgressRoot: {
    color: '#d6d6d6',
    width: '100% !important',
    height: '100% !important',
  },
  circularProgressPrimary: {
    animationDuration: '550ms',
    position: 'absolute',
    left: 2,
    top: -2,
    width: '100% !important',
    height: '100% !important',
  },
  textRoot: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 3,
    fontFamily: Fonts.EXTRA_BOLD,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
const CustomProgress = ({color, value, size, thickness, ...props}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress
        variant='static'
        value={100}
        className={classes.circularProgressRoot}
        size={size}
        thickness={thickness}
        {...props}
      />
      <CircularProgress
        className={classes.circularProgressPrimary}
        variant='static'
        value={value}
        color={color}
        thickness={thickness}
        size={size}
        {...props}
      />
      <Box
        className={classes.textRoot}
        fontSize={30}
        fontWeight={500}
        color='secondary.main'>
        {value}%
      </Box>
    </Box>
  );
};
export default CustomProgress;
