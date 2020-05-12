import React from 'react';
import {Card} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import GraphFile from './GraphFile';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';
import {green} from '@material-ui/core/colors';

const FloatingGraphs = ({data, title}) => {
  return (
    <Box textAlign='center' p={{xs: 4, sm: 6, xl: 8}} height={1} clone>
      <Card>
        <Box component='p' mb={3} color='grey.500' fontSize={{xs: 16, xl: 18}}>
          {title}
        </Box>
        <Box
          component='h3'
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}
          display='flex'
          alignitem='center'
          justifyContent='center'>
          <Box component='span' px={3}>
            {data.value}
          </Box>
          {data.change > 0 ? (
            <Box
              component='span'
              display='flex'
              alignItems='center'
              color={green[500]}
              fontFamily={Fonts.BOLD}
              mt={1}
              fontSize={{xs: 14, sm: 16, xl: 20}}>
              <Box
                component='span'
                fontFamily={Fonts.BOLD}
                fontSize={{xs: 14, sm: 16, xl: 18}}>
                <ArrowUpwardIcon />
              </Box>
              <Box component='span' ml={1} mb={1}>
                {data.change}
              </Box>
            </Box>
          ) : (
            <Box
              component='span'
              display='flex'
              alignItems='center'
              color='secondary.main'
              fontFamily={Fonts.BOLD}
              mt={1}
              fontSize={{xs: 14, sm: 16, xl: 20}}>
              <Box
                component='span'
                fontFamily={Fonts.BOLD}
                fontSize={{xs: 14, sm: 16, xl: 18}}>
                <ArrowDownwardIcon />
              </Box>
              <Box component='span' ml={1} mb={1}>
                {data.change}
              </Box>
            </Box>
          )}
        </Box>
        <Box m={-8} mt={-2}>
          <GraphFile
            data={data.graphData}
            strokeColor={data.strokeColor}
            areaColor={data.areaColor}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default FloatingGraphs;

FloatingGraphs.defaultProps = {
  text: '',
  data: {
    value: '',
    change: 0,
    strokeColor: '#4299E1',
    areaColor: '#90CDF4',
    graphData: [],
  },
};

FloatingGraphs.propTypes = {
  text: PropTypes.string,
  data: PropTypes.object,
};
