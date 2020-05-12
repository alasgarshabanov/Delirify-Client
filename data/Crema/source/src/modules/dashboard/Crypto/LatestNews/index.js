import React from 'react';
import Card from '@material-ui/core/Card';
import NewsList from './NewsList';
import Link from '@material-ui/core/Link';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {Box, makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';

const LatestNews = props => {
  const {newsData} = props;

  const useStyles = makeStyles(theme => ({
    textRes: {
      fontSize: 16,
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
    },
  }));

  const classes = useStyles(props);

  return (
    <Box
      py={{xs: 4, sm: 6, xl: 6}}
      px={{xs: 6, sm: 8, xl: 10}}
      height='1'
      clone>
      <Card>
        <Box mb={2} display='flex' alignItems='center'>
          <Box
            component='h3'
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 18, sm: 20, xl: 24}}>
            <IntlMessages id='dashboard.latestNews' />
          </Box>
          <Box component='span' ml='auto'>
            <Link
              color='secondary'
              component='button'
              className={classes.textRes}
              underline='none'>
              <IntlMessages id='common.viewAll' />
            </Link>
          </Box>
        </Box>
        <NewsList newsData={newsData} />
      </Card>
    </Box>
  );
};

export default LatestNews;

LatestNews.defaultProps = {
  newsData: [],
};

LatestNews.propTypes = {
  newsData: PropTypes.array,
};
