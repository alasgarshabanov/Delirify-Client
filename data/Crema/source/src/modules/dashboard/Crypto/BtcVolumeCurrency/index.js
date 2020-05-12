import React from 'react';
import Card from '@material-ui/core/Card';
import BtcGraph from './BtcGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {Box, makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';

const BtcVolumeCurrency = (props) => {
  const {data} = props;

  const useStyles = makeStyles((theme) => ({
    textRes: {
      fontSize: 16,
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
    },
    textTruncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  }));

  const classes = useStyles(props);
  return (
    <Box
      py={{xs: 5, sm: 5, xl: 5}}
      px={{xs: 6, sm: 6, xl: 6}}
      height='1'
      display='flex'
      flexDirection='column'
      clone>
      <Card>
        <Box
          component='h3'
          className={classes.textTruncate}
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}>
          <IntlMessages id='dashboard.btcVolumeByCurency' />
        </Box>
        <BtcGraph data={data} />
        <Box
          pl={{xl: 5}}
          pt={5}
          display='flex'
          flexWrap='wrap'
          justifyContent='space-around'>
          {data.map((item) => {
            return (
              <Box
                px={3}
                display='flex'
                flex={1}
                alignItems='center'
                key={item.id}>
                <Box
                  component='span'
                  height={{xs: 12, xl: 16}}
                  width={{xs: 12, xl: 16}}
                  borderRadius='50%'
                  display='block'
                  p={1}
                  bgcolor={item.color}
                />
                <Box
                  component='span'
                  color='grey.500'
                  ml={2}
                  className={classes.textRes}>
                  {item.name}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Card>
    </Box>
  );
};

export default BtcVolumeCurrency;

BtcVolumeCurrency.defaultProps = {
  data: [],
};

BtcVolumeCurrency.propTypes = {
  data: PropTypes.array,
};
