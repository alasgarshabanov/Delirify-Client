import React from 'react';
import {Card, makeStyles} from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';
import {isBreakPointDown} from '../../../../@crema/utility/Utils';

const getData = (data) => {
  if (isBreakPointDown('xl')) {
    return data.slice(0, 6);
  } else {
    return data;
  }
};

const Formats = (props) => {
  const useStyles = makeStyles((theme) => ({
    radioLabelGroup: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginLeft: '-25px',
      marginRight: '-15px',
    },

    radioLabel: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '15px',
      paddingRight: '15px',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 2,

      '& .MuiTypography-body1': {
        fontSize: 18,
        fontFamily: `${Fonts.BOLD} !important`,
        color: '#A8A8A8',
        marginLeft: 10,
        marginBottom: 6,
        [theme.breakpoints.up('xl')]: {
          fontSize: 20,
        },
      },
    },
  }));

  const classes = useStyles(props);

  const data = getData(props.data);

  return (
    <Box py={{xs: 5, sm: 5, xl: 5}} px={{xs: 6, sm: 6, xl: 6}} height='1' clone>
      <Card>
        <Box
          component='h3'
          mb={5}
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}>
          <IntlMessages id='dashboard.formats' />
        </Box>

        <RadioGroup className={classes.radioLabelGroup}>
          {data.map((item) => {
            return (
              <FormControlLabel
                key={item.id}
                value={item.name}
                control={<Radio />}
                label={item.name}
                className={classes.radioLabel}
              />
            );
          })}
        </RadioGroup>
      </Card>
    </Box>
  );
};

export default Formats;

Formats.defaultProps = {
  data: [],
};

Formats.propTypes = {
  data: PropTypes.array,
};
