import React from 'react';
import Card from '@material-ui/core/Card';
import ReviewsGraph from './ReviewsGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {green, teal} from '@material-ui/core/colors';
import {Fonts} from '../../../../shared/constants/AppEnums';

const Reviews = ({reviewGraphData}) => {
  return (
    <Box
      py={{xs: 5, sm: 5, xl: 5}}
      px={{xs: 6, sm: 6, xl: 6}}
      bgcolor={teal[600]}
      color='white'
      clone>
      <Card>
        <Box display='flex'>
          <Box>
            <Box
              mb={1}
              component='h3'
              fontFamily={Fonts.BOLD}
              fontSize={{xs: 18, sm: 20, xl: 24}}>
              <IntlMessages id='common.reviews' />
            </Box>
            <Box
              component='h4'
              mb={2}
              fontFamily={Fonts.BOLD}
              fontSize={{xs: 18, xl: 24}}
              color={green[300]}>
              34,042
            </Box>
            <Typography fontSize={14}>
              <IntlMessages id='dashboard.reviewText' />
            </Typography>
          </Box>
        </Box>
        <Box mb={-16}>
          <ReviewsGraph reviewGraphData={reviewGraphData} />
        </Box>
      </Card>
    </Box>
  );
};

export default Reviews;

Reviews.defaultProps = {
  reviewGraphData: [],
};

Reviews.propTypes = {
  reviewGraphData: PropTypes.array,
};
