import React from 'react';
import Card from '@material-ui/core/Card';
import TicketSupportTable from './TicketSupportTable';
import Link from '@material-ui/core/Link';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';

const TicketSupport = (props) => {
  const {ticketSupportData} = props;

  const useStyles = makeStyles((theme) => ({
    link: {
      fontSize: 16,
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
    },
  }));

  const classes = useStyles(props);

  return (
    <Box py={{xs: 5, sm: 5, xl: 5}} px={{xs: 6, sm: 6, xl: 6}} clone>
      <Card>
        <Box mb={4} display='flex' alignItems='center'>
          <Box
            component='h2'
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 18, sm: 20, xl: 24}}>
            <IntlMessages id='dashboard.latestTicketSupport' />
          </Box>
          <Box component='span' ml='auto' display='flex' alignItems='center'>
            <Link
              color='secondary'
              component='button'
              underline='none'
              className={classes.link}>
              <IntlMessages id='common.viewAll' />
            </Link>
          </Box>
        </Box>
        <TicketSupportTable ticketSupportData={ticketSupportData} />
      </Card>
    </Box>
  );
};

export default TicketSupport;

TicketSupport.defaultProps = {
  ticketSupportData: [],
};

TicketSupport.propTypes = {
  ticketSupportData: PropTypes.array,
};
