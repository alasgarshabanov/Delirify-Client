import React, {useState} from 'react';
import Select from '@material-ui/core/Select';
import {Card} from '@material-ui/core';
import SubscriptionGraph from './SubscriptionGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Fonts} from '../../../../shared/constants/AppEnums';

const Subscriptions = ({data}) => {
  const [yearValue, setYearValue] = useState(2019);
  const [monthValue, setMonthValue] = useState('June');

  const [graphData, setGraphData] = useState(data.dataOne);

  const handleYearChange = (event) => {
    setYearValue(event.target.value);
    switch (event.target.value) {
      case 2017:
        setGraphData(data.dataTwo);
        break;
      case 2018:
        setGraphData(data.dataThree);
        break;
      case 2019:
        setGraphData(data.dataOne);
        break;
      default:
        setGraphData(data.dataOne);
    }
  };

  const handleMonthChange = (event) => {
    setMonthValue(event.target.value);
    switch (event.target.value) {
      case 'June':
        setGraphData(data.dataTwo);
        break;
      case 'July':
        setGraphData(data.dataThree);
        break;
      case 'August':
        setGraphData(data.dataOne);
        break;
      default:
        setGraphData(data.dataThree);
    }
  };

  const {messages} = useIntl();

  const useStyles = makeStyles((theme) => ({
    selectBox: {
      marginRight: 8,
      cursor: 'pointer',
      fontSize: 16,
      [theme.breakpoints.up('xl')]: {
        marginLeft: 24,
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
        <Box height={1}>
          <Box
            display='flex'
            flexDirection={{xs: 'column', sm: 'row'}}
            alignItems={{xs: 'center'}}
            justifyContent={{sm: 'space-between'}}
            mb={3}>
            <Box
              component='h3'
              color='text.primary'
              mb={2}
              fontFamily={Fonts.BOLD}
              fontSize={{xs: 18, sm: 20, xl: 24}}>
              <IntlMessages id='dashboard.subscriptions' />
            </Box>
            <Box textAlign={{sm: 'right'}}>
              <Select
                value={yearValue}
                onChange={handleYearChange}
                disableUnderline={true}
                className={classes.selectBox}>
                <option value={2019} className={classes.selectOption}>
                  2019
                </option>
                <option value={2018} className={classes.selectOption}>
                  2018
                </option>
                <option value={2017} className={classes.selectOption}>
                  2017
                </option>
              </Select>
              <Select
                className={classes.selectBox}
                value={monthValue}
                onChange={handleMonthChange}
                disableUnderline={true}>
                <option value='June' className={classes.selectOption}>
                  {messages['common.june']}
                </option>
                <option value='July' className={classes.selectOption}>
                  {messages['common.july']}
                </option>
                <option value='August' className={classes.selectOption}>
                  {messages['common.august']}
                </option>
              </Select>
            </Box>
          </Box>

          <SubscriptionGraph data={graphData} />
        </Box>
      </Card>
    </Box>
  );
};

export default Subscriptions;

Subscriptions.defaultProps = {
  data: {
    dataOne: [],
    dataTwo: [],
    dataThree: [],
  },
};

Subscriptions.propTypes = {
  data: PropTypes.object,
};
