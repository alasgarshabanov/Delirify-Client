import React from 'react';
import {Card} from '@material-ui/core';
import LineGraph from './LineGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';

const MetricTitleLineGraphCard = ({
  title,
  titleColor,
  valueColor,
  differenceColor,
  bgColor,
  data,
  graphColor,
}) => {
  return (
    <Box
      py={{xs: 5, sm: 5, xl: 5}}
      px={{xs: 6, sm: 6, xl: 6}}
      bgcolor={bgColor}
      clone>
      <Card>
        <Box
          component='h3'
          mb={2}
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}
          color={titleColor}>
          {title}
        </Box>
        <Box display='flex' alignItems='center' mb={{xs: 3, xl: 0}}>
          <Box
            component='h2'
            mb={0}
            mr={3}
            color={valueColor}
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 36, md: 42, xl: 50}}>
            {data.value}
          </Box>

          <LineGraph data={data.graphData} graphColor={graphColor} />
        </Box>
        <Box component='p' fontSize={{xs: 16, xl: 18}} color={differenceColor}>
          <Box mr={1} component='span'>
            {data.difference}
          </Box>
          <Box mr={1} component='span'>
            <IntlMessages id='dashboard.thisMonth' />
          </Box>
          <Box mr={1} component='span'>
            {data.differencePercent}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default MetricTitleLineGraphCard;

MetricTitleLineGraphCard.defaultProps = {
  bgColor: '',
  titleColor: '',
  valueColor: '',
  data: {
    value: '',
    difference: '',
    differencePercent: '',
    graphData: [],
  },
  differenceColor: '',
  graphColor: '',
};

MetricTitleLineGraphCard.propTypes = {
  title: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  titleColor: PropTypes.string,
  valueColor: PropTypes.string,
  data: PropTypes.object,
  differenceColor: PropTypes.string,
  graphColor: PropTypes.string,
};
