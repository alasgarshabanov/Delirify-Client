import React, {useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StatGraphs from './StatGraphs';
import Select from '@material-ui/core/Select';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core';
import {Fonts} from '../../../../../shared/constants/AppEnums';

const GraphTabs = props => {
  const {clientsData, incomeData, projectData} = props;

  const [value, setValue] = useState(0);
  const [yearValue, setYearValue] = useState(2019);
  const [monthValue, setMonthValue] = useState('June');

  const [projectGraphData, setProjectGraphData] = useState(projectData);
  const [clientsGraphData, setClientsGraphData] = useState(clientsData);
  const [incomeGraphData, setIncomeGraphData] = useState(incomeData);

  const onSetGraphValue = data => {
    switch (value) {
      case 0: {
        setProjectGraphData(data);
        break;
      }
      case 1: {
        setClientsGraphData(data);
        break;
      }
      case 2: {
        setIncomeGraphData(data);
        break;
      }
      default:
        return null;
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleYearChange = event => {
    setYearValue(event.target.value);
    switch (event.target.value) {
      case 2017:
        onSetGraphValue(incomeData);
        break;
      case 2018:
        onSetGraphValue(clientsData);
        break;
      case 2019:
        onSetGraphValue(projectData);
        break;
      default:
        onSetGraphValue(projectData);
    }
  };

  const handleMonthChange = event => {
    setMonthValue(event.target.value);
    switch (event.target.value) {
      case 'June':
        onSetGraphValue(incomeData);
        break;
      case 'July':
        onSetGraphValue(clientsData);
        break;
      case 'August':
        onSetGraphValue(projectData);
        break;
      default:
        onSetGraphValue(projectData);
    }
  };

  const a11yProps = index => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const {messages} = useIntl();

  const useStyles = makeStyles(theme => ({
    crMuiTabs: {
      flex: '1',
      position: 'relative',
      '& .Mui-selected': {
        fontFamily: Fonts.BOLD,
      },
      '& .MuiTabs-flexContainer': {
        [theme.breakpoints.up('md')]: {
          justifyContent: 'center',
        },
      },
    },
    crMuiTab: {
      minWidth: '10px',
      textTransform: 'capitalize',
      padding: 0,
      marginLeft: 8,
      marginRight: 8,
      fontSize: 16,
      [theme.breakpoints.up('xl')]: {
        marginLeft: 14,
        marginRight: 14,
        fontSize: 18,
      },
    },
    selectBox: {
      marginLeft: 8,
      cursor: 'pointer',
      fontSize: 16,
      [theme.breakpoints.up('xl')]: {
        marginLeft: 14,
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

  const classes = useStyles(props);

  return (
    <Box width={1}>
      <Box
        display='flex'
        flexDirection={{xs: 'column', md: 'row'}}
        alignItems={{md: 'center'}}>
        <Box
          component='h3'
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}>
          <IntlMessages id='dashboard.statistics' />
        </Box>

        <Box
          mt={{md: -2}}
          flex='1'
          display='flex'
          flexDirection={{xs: 'column', md: 'row'}}
          alignItems={{md: 'center'}}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            aria-label='simple tabs example'
            className={classes.crMuiTabs}>
            <Tab
              className={classes.crMuiTab}
              label={<IntlMessages id='dashboard.project' />}
              {...a11yProps(0)}
            />
            <Tab
              className={classes.crMuiTab}
              label={<IntlMessages id='dashboard.newClients' />}
              {...a11yProps(1)}
            />
            <Tab
              className={classes.crMuiTab}
              label={<IntlMessages id='dashboard.income' />}
              {...a11yProps(2)}
            />
          </Tabs>
          <Box mt={2}>
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
      </Box>
      <Box mt={4}>
        {value === 0 && <StatGraphs data={projectGraphData} />}
        {value === 1 && <StatGraphs data={clientsGraphData} />}
        {value === 2 && <StatGraphs data={incomeGraphData} />}
      </Box>
    </Box>
  );
};

export default GraphTabs;

GraphTabs.defaultProps = {
  clientsData: [],
  incomeData: [],
  projectData: [],
};

GraphTabs.propTypes = {
  clientsData: PropTypes.array,
  incomeData: PropTypes.array,
  projectData: PropTypes.array,
};
