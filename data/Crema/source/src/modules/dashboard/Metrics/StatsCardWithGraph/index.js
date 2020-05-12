import React from 'react';
import {Card} from '@material-ui/core';
import IncomeGraph from './IncomeGraph';
import WebTrafficGraph from './WebTrafficGraph';
import RevenueGrowthGraph from './RevenueGrowthGraph';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';

const StatsCardWithGraph = ({
  data,
  text,
  bgColor,
  headingColor,
  valueColor,
  type,
}) => {
  const onGetGraph = () => {
    switch (type) {
      case 'incomeGraph':
        return <IncomeGraph data={data.graphData} />;

      case 'trafficGraph':
        return <WebTrafficGraph data={data.graphData} />;

      case 'revenueGrowth':
        return <RevenueGrowthGraph data={data.graphData} />;

      default:
        return <IncomeGraph data={data.graphData} />;
    }
  };

  return (
    <Box
      py={{xs: 5, sm: 5, xl: 5}}
      px={{xs: 6, sm: 6, xl: 6}}
      bgcolor={bgColor}
      height={1}
      clone>
      <Card>
        <Box position='relative'>
          <Box position='absolute' top={0} left={0}>
            <Box
              component='p'
              color={headingColor}
              fontSize={{xs: 16, xl: 18}}
              mb={{xs: 4, md: 6}}>
              {text}
            </Box>
            <Box
              color={valueColor}
              component='h3'
              fontSize={{xs: 18, sm: 20, xl: 24}}
              fontFamily={Fonts.BOLD}>
              {data.value}
            </Box>
          </Box>
          <Box pl={-10} mr={-8} mb={-10}>
            {onGetGraph()}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default StatsCardWithGraph;

StatsCardWithGraph.defaultProps = {
  bgColor: '',
  data: {
    value: '',
    graphData: [],
  },
  type: '',
  headingColor: '',
  valueColor: '',
};

StatsCardWithGraph.propTypes = {
  text: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  data: PropTypes.object,
  type: PropTypes.string,
  headingColor: PropTypes.string,
  valueColor: PropTypes.string,
};
