import React from 'react';
import {Card} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import {makeStyles} from '@material-ui/core/styles';
import {Fonts} from '../../../../shared/constants/AppEnums';
import {isBreakPointDown} from '../../../../@crema/utility/Utils';

const getData = data => {
  if (isBreakPointDown('xl')) {
    return data.slice(0, 3);
  } else {
    return data;
  }
};

const TaskList = props => {
  const data = getData(props.data);
  const useStyles = makeStyles(theme => ({
    pointer: {
      cursor: 'pointer',
    },
  }));

  const classes = useStyles(props);
  return (
    <Box
      pt={{xs: 4, sm: 6, xl: 8}}
      pb={{xs: 4, sm: 4, xl: 6}}
      px={{xs: 6, sm: 8, xl: 10}}
      height='1'
      clone>
      <Card>
        <Box mb={2} display='flex' alignItems='center'>
          <Box
            component='h3'
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 18, sm: 20, xl: 24}}>
            <IntlMessages id='dashboard.taskList' />
          </Box>
          <Box component='span' ml='auto' mt={1.5}>
            <CloseIcon className={classes.pointer} />
          </Box>
        </Box>
        <List>
          {data.map(item => {
            return <TaskItem key={item.id} item={item} />;
          })}
        </List>
      </Card>
    </Box>
  );
};

export default TaskList;

TaskList.defaultProps = {
  data: [],
};

TaskList.propTypes = {
  data: PropTypes.array,
};
