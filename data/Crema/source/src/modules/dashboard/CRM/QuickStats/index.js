import React from 'react';
import Grid from '@material-ui/core/Grid/index';
import StatsCard from './StatsCard';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ReceiptIcon from '@material-ui/icons/Receipt';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import {isBreakPointDown} from '../../../../@crema/utility/Utils';
import PropTypes from 'prop-types';
import {blue, indigo, red, teal} from '@material-ui/core/colors';
import {Fonts} from '../../../../shared/constants/AppEnums';

const QuickStats = ({quickStatsData}) => {
  return (
    <>
      <Box
        component='h2'
        color='text.primary'
        fontSize={{xs: 18, sm: 20, xl: 24}}
        mb={{xs: 4, sm: 4, xl: 6}}
        fontFamily={Fonts.BOLD}>
        <IntlMessages id='dashboard.quickStats' />
      </Box>
      <Grid container spacing={isBreakPointDown('md') ? 4 : 8}>
        <Grid item xs={12} sm={6}>
          <StatsCard
            icon={<PersonIcon />}
            bgColor={red[500]}
            data={quickStatsData.clientsData}
            heading={<IntlMessages id='dashboard.totalClients' />}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <StatsCard
            icon={<ReceiptIcon />}
            bgColor={blue[500]}
            data={quickStatsData.invoiceData}
            heading={<IntlMessages id='dashboard.paidInvoices' />}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <StatsCard
            icon={<InsertDriveFileIcon />}
            bgColor={indigo[500]}
            data={quickStatsData.totalProjectsData}
            heading={<IntlMessages id='dashboard.totalProjects' />}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <StatsCard
            icon={<DescriptionIcon />}
            bgColor={teal[500]}
            data={quickStatsData.openProjectsData}
            heading={<IntlMessages id='dashboard.openProjects' />}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default QuickStats;

QuickStats.defaultProps = {
  quickStatsData: null,
};

QuickStats.propTypes = {
  quickStatsData: PropTypes.object,
};
