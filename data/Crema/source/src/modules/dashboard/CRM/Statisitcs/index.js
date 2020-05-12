import React from 'react';
import {Box, Card} from '@material-ui/core';
import GraphTabs from './GraphTabs';
import PropTypes from 'prop-types';

export const Statistics = ({clientsData, incomeData, projectData}) => {
  return (
    <Box
      py={{xs: 5, sm: 5, xl: 5}}
      px={{xs: 6, sm: 6, xl: 6}}
      height='100%'
      clone>
      <Card>
        <GraphTabs
          clientsData={clientsData}
          incomeData={incomeData}
          projectData={projectData}
        />
      </Card>
    </Box>
  );
};

export default Statistics;

Statistics.defaultProps = {
  clientsData: [],
  incomeData: [],
  projectData: [],
};

Statistics.propTypes = {
  clientsData: PropTypes.array,
  incomeData: PropTypes.array,
  projectData: PropTypes.array,
};
