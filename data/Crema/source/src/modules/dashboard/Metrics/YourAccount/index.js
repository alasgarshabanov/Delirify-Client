import React from 'react';
import {Card} from '@material-ui/core';
import AccountGraph from './AccountGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';

const YourAccount = ({data}) => {
  return (
    <Box
      py={{xs: 5, sm: 5, xl: 5}}
      px={{xs: 6, sm: 6, xl: 6}}
      height={1}
      display='flex'
      flexDirection='column'
      clone>
      <Card>
        <Box
          component='h3'
          color='text.primary'
          mb={2}
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}>
          <IntlMessages id='dashboard.yourAccount' />
        </Box>
        <Box mt='auto'>
          <AccountGraph data={data} />
        </Box>
      </Card>
    </Box>
  );
};

export default YourAccount;

YourAccount.defaultProps = {
  data: [],
};

YourAccount.propTypes = {
  data: PropTypes.array,
};
