import React from 'react';
import {Card, makeStyles} from '@material-ui/core';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem';
import Box from '@material-ui/core/Box';
import {Fonts} from '../../../../shared/constants/AppEnums';

const Reviews = (props) => {
  const useStyles = makeStyles((theme) => ({
    reviewsList: {
      fontSize: 16,
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
      '&:not(:last-child)': {
        marginBottom: 16,
      },
    },
  }));

  const classes = useStyles(props);

  const {data} = props;

  return (
    <Box py={{xs: 5, sm: 5, xl: 5}} px={{xs: 6, sm: 6, xl: 6}} height='1' clone>
      <Card>
        <Box
          component='h3'
          mb={5}
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}>
          <IntlMessages id='common.reviews' />
        </Box>
        {data.map((item) => {
          return <ReviewItem key={item.id} item={item} classes={classes} />;
        })}
      </Card>
    </Box>
  );
};

export default Reviews;

Reviews.defaultProps = {
  data: [],
};

Reviews.propTypes = {
  data: PropTypes.array,
};
