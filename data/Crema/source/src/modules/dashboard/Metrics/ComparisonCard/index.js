import React from 'react';
import {Card, makeStyles} from '@material-ui/core';
import ActiveUsersGraph from './ActiveUsersGraph';
import ExtraRevenueGraph from './ExtraRevenueGraph';
import TrafficRaiseGraph from './TrafficRaiseGraph';
import LessOrdersGraph from './LessOrdersGraph';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';

const ComparisonCard = ({
  data,
  text,
  bgColor,
  headingColor,
  valueColor,
  type,
}) => {
  const useStyles = makeStyles((theme) => ({
    containerRoot: {
      width: '100%',
    },
  }));

  const classes = useStyles();

  const onGetGraph = () => {
    switch (type) {
      case 'activeUsers':
        return <ActiveUsersGraph data={data.graphData} classes={classes} />;

      case 'extraRevenue':
        return <ExtraRevenueGraph data={data.graphData} classes={classes} />;

      case 'trafficRaise':
        return <TrafficRaiseGraph data={data.graphData} classes={classes} />;

      case 'lessOrders':
        return <LessOrdersGraph data={data.graphData} classes={classes} />;

      default:
        return <ActiveUsersGraph data={data.graphData} classes={classes} />;
    }
  };

  return (
    <Box bgcolor={bgColor} clone>
      <Card>
        <Box position='relative'>
          <Box
            py={{xs: 5, sm: 5, xl: 5}}
            px={{xs: 6, sm: 6, xl: 6}}
            position='absolute'
            top={0}
            left={0}>
            <Box
              component='p'
              mb={4}
              color={headingColor}
              fontSize={{xs: 16, xl: 18}}>
              {text}
            </Box>
            <Box
              component='h3'
              color={valueColor}
              fontSize={{xs: 18, sm: 20, xl: 24}}
              fontFamily={Fonts.BOLD}>
              {data.value}
            </Box>
          </Box>
          <Box position='relative' mb={-4} pt={4}>
            {onGetGraph()}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ComparisonCard;

ComparisonCard.defaultProps = {
  bgColor: '',
  data: {
    value: '',
    graphData: [],
  },
  type: '',
  headingColor: '',
  valueColor: '',
};

ComparisonCard.propTypes = {
  text: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  data: PropTypes.object,
  type: PropTypes.string,
  headingColor: PropTypes.string,
  valueColor: PropTypes.string,
};
