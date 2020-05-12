import React from 'react';
import Card from '@material-ui/core/Card';
import MarketGraph from './MarketGraph';
import Link from '@material-ui/core/Link';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {Box, makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import {indigo, red, teal} from '@material-ui/core/colors';
import {Fonts} from '../../../../shared/constants/AppEnums';

const CryptoMarketActivity = (props) => {
  const {marketGraphData} = props;

  const useStyles = makeStyles((theme) => ({
    textLink: {
      fontSize: 18,
      [theme.breakpoints.up('xl')]: {
        fontSize: 20,
      },
    },
  }));

  const classes = useStyles(props);
  return (
    <Box py={{xs: 5, sm: 5, xl: 5}} px={{xs: 6, sm: 6, xl: 6}} height='1' clone>
      <Card>
        <Box display='flex' alignItems='center' mb={5}>
          <Box
            component='h3'
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 18, sm: 20, xl: 24}}>
            <IntlMessages id='dashboard.cryptoMarketActivity' />
          </Box>
          <Box component='span' ml='auto'>
            <Link
              color='secondary'
              component='button'
              className={classes.textLink}
              underline='none'>
              <IntlMessages id='common.viewAll' />
            </Link>
          </Box>
        </Box>
        <MarketGraph marketGraphData={marketGraphData} />
        <Box
          mt={6}
          mb={1}
          display='flex'
          flexDirection={{xs: 'column', xl: 'row'}}
          alignItems={{xl: 'center'}}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'>
            <Box mr={3} display='flex' alignItems='center'>
              <Box
                component='span'
                height={{xs: 12, xl: 16}}
                width={{xs: 12, xl: 16}}
                display='block'
                borderRadius='50%'
                mr={2}
                bgcolor={teal[600]}
              />
              <Box component='span' mr={2} fontSize={{xs: 16, xl: 18}}>
                <IntlMessages id='common.low' />
              </Box>
            </Box>
            <Box mr={3} display='flex' alignItems='center'>
              <Box
                component='span'
                height={{xs: 12, xl: 16}}
                width={{xs: 12, xl: 16}}
                display='block'
                borderRadius='50%'
                mr={2}
                bgcolor={indigo[700]}
              />
              <Box component='span' mr={2} fontSize={{xs: 16, xl: 18}}>
                <IntlMessages id='common.medium' />
              </Box>
            </Box>
            <Box display='flex' alignItems='center'>
              <Box
                component='span'
                height={{xs: 12, xl: 16}}
                width={{xs: 12, xl: 16}}
                display='block'
                borderRadius='50%'
                mr={2}
                bgcolor={red[600]}
              />
              <Box component='span' fontSize={{xs: 16, xl: 18}}>
                <IntlMessages id='common.high' />
              </Box>
            </Box>
          </Box>
          <Box
            ml={{xs: 0, xl: 'auto'}}
            mt={{xs: 3, xl: 0}}
            fontSize={{xs: 14, sm: 16, xl: 18}}
            display='flex'
            alignItems='center'
            justifyContent='space-between'>
            <Box mr={3}>
              <Box component='span' fontFamily={Fonts.MEDIUM}>
                1356
              </Box>
              <Box component='span' ml={2}>
                <IntlMessages id='dashboard.openDeals' />
              </Box>
            </Box>

            <Box>
              <Box component='span' fontFamily={Fonts.MEDIUM}>
                $5.9B
              </Box>
              <Box component='span' ml={2}>
                <IntlMessages id='dashboard.dealsVolume' />
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default CryptoMarketActivity;

CryptoMarketActivity.defaultProps = {
  marketGraphData: [],
};

CryptoMarketActivity.propTypes = {
  marketGraphData: PropTypes.array,
};
