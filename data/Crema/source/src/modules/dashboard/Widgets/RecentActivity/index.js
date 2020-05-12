import React from 'react';
import {Card} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {Box, makeStyles} from '@material-ui/core';
import NotificationItem from '../../../../@crema/core/Notifications/NotificationItem';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';

const RecentActivity = (props) => {
  const {data} = props;
  const useStyles = makeStyles((theme) => ({
    pointer: {
      cursor: 'pointer',
    },
    notiList: {
      paddingTop: 0,
      paddingBottom: 0,
      '& .paddingX': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  }));

  const classes = useStyles(props);
  return (
    <Box py={{xs: 5, sm: 5, xl: 5}} px={{xs: 6, sm: 6, xl: 6}} height='1' clone>
      <Card>
        <Box mb={4} display='flex' alignItems='center'>
          <Box
            component='h3'
            fontSize={{xs: 18, sm: 20, xl: 24}}
            fontFamily={Fonts.BOLD}>
            <IntlMessages id='dashboard.recentActivity' />
          </Box>
          <Box component='span' ml='auto' mt={1.5}>
            <CloseIcon className={classes.pointer} />
          </Box>
        </Box>
        <List className={classes.notiList}>
          {data.map((item) => {
            return (
              <NotificationItem
                listStyle='paddingX'
                item={item}
                key={item.id}
              />
            );
          })}
        </List>
      </Card>
    </Box>
  );
};

export default RecentActivity;

RecentActivity.defaultProps = {
  data: [],
};

RecentActivity.propTypes = {
  data: PropTypes.array,
};
