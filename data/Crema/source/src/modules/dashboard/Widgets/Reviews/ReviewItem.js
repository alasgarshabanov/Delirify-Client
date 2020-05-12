import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';

const ReviewItem = ({item, classes}) => {
  return (
    <Box className={classes.reviewsList} key={item.id}>
      <Box mb={1} display='flex' alignItems='center'>
        <Rating value={item.rating} readOnly />
        <Box component='span' ml='auto' color='grey.500'>
          {item.time}
        </Box>
      </Box>
      <Box component='p' color='grey.600' mb={1}>
        {item.content}
      </Box>
      <Box component='span' color='primary.main' fontFamily={Fonts.BOLD}>
        - {item.by}
      </Box>
    </Box>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};
