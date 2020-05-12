import React, {useState} from 'react';
import Select from '@material-ui/core/Select';
import {Card} from '@material-ui/core';
import VisitsGraph from './VisitsGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Fonts} from '../../../../shared/constants/AppEnums';

const Visits = ({data}) => {
  const [graphData, setGraphData] = useState(data.graphData.dataOne);

  const [weekValue, setWeekValue] = useState('Last Weeks');

  const handleWeekChange = (event) => {
    setWeekValue(event.target.value);
    switch (event.target.value) {
      case 'This Week':
        setGraphData(data.graphData.dataTwo);
        break;
      case 'Last Weeks':
        setGraphData(data.graphData.dataOne);
        break;
      case 'Last Month':
        setGraphData(data.graphData.dataThree);
        break;
      default:
        setGraphData(data.graphData.dataOne);
    }
  };

  const {messages} = useIntl();

  const useStyles = makeStyles((theme) => ({
    selectBox: {
      cursor: 'pointer',
      fontSize: 16,
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
      '& .MuiSelect-select': {
        paddingLeft: 10,
      },
    },
    selectOption: {
      cursor: 'pointer',
      padding: 8,
      fontSize: 16,
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
    },
  }));
  const classes = useStyles();

  return (
    <Box py={{xs: 5, sm: 5, xl: 5}} px={{xs: 6, sm: 6, xl: 6}} height={1} clone>
      <Card>
        <Box
          mb={6}
          display='flex'
          alignItems='center'
          justifyContent='space-between'>
          <Box
            component='h3'
            color='text.primary'
            fontSize={{xs: 18, sm: 20, xl: 24}}
            fontFamily={Fonts.BOLD}>
            <IntlMessages id='dashboard.visits' />
          </Box>
          <Box textAlign='right'>
            <Select
              className={classes.selectBox}
              value={weekValue}
              onChange={handleWeekChange}
              disableUnderline={true}>
              <option value='This Week' className={classes.selectOption}>
                {messages['dashboard.thisWeek']}
              </option>
              <option value='Last Weeks' className={classes.selectOption}>
                {messages['dashboard.lastWeeks']}
              </option>
              <option value='Last Month' className={classes.selectOption}>
                {messages['dashboard.lastMonth']}
              </option>
            </Select>
          </Box>
        </Box>

        <VisitsGraph data={graphData} />

        <Box
          mb={1}
          display='flex'
          alignItems='center'
          fontFamily={Fonts.BOLD}
          justifyContent='space-between'
          style={{textTransform: 'uppercase'}}>
          <Box component='p' color='text.primary' fontSize={{xs: 16, xl: 18}}>
            <IntlMessages id='common.new' />
            <Box ml={2} component='span' color='primary.main'>
              {data.new}
            </Box>
          </Box>
          <Box component='p' color='text.primary' fontSize={{xs: 16, xl: 18}}>
            <IntlMessages id='common.returning' />
            <Box ml={2} component='span' color='primary.main'>
              {data.returning}
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Visits;

Visits.defaultProps = {
  data: {
    new: 0,
    returning: 0,
    graphData: {
      dataOne: [],
      dataTwo: [],
      dataThree: [],
    },
  },
};

Visits.propTypes = {
  data: PropTypes.object,
};
