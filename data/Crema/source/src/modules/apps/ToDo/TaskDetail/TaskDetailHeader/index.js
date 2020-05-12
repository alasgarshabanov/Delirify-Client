import React from 'react';
import {useDispatch} from 'react-redux';
import {onUpdateSelectedTask} from '../../../../../redux/actions';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import StatusToggleButton from './StatusToggleButton';
import AppsDeleteIcon from '../../../../../@crema/core/AppsDeleteIcon';
import {grey} from '@material-ui/core/colors';

const TaskDetailHeader = props => {
  const {selectedTask} = props;
  const dispatch = useDispatch();

  const history = useHistory();

  const onClickBackButton = () => {
    history.goBack();
  };

  const onChangeStarred = checked => {
    const task = selectedTask;
    task.isStarred = checked;
    dispatch(onUpdateSelectedTask(task));
  };

  const onDeleteTask = () => {
    const task = selectedTask;
    task.folderValue = 126;
    dispatch(onUpdateSelectedTask(task));
    history.goBack();
  };

  const useStyles = makeStyles(theme => ({
    statusBtn: {
      fontSize: 12,
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: theme.overrides.MuiCard.root.borderRadius,
      cursor: 'pointer',
      [theme.breakpoints.up('lg')]: {
        fontSize: 14,
      },
    },
    appHeader: {
      height: 61,
      borderBottom: `1px solid ${grey[300]}`,
      [theme.breakpoints.up('xl')]: {
        height: 77,
      },
    },
    deleteIcon: {
      marginLeft: 'auto',
      cursor: 'pointer',
      [theme.breakpoints.up('sm')]: {
        marginLeft: 16,
      },
    },
    doneIcon: {
      marginRight: 4,
      fontSize: 18,
      verticalAlign: 'middle',
      [theme.breakpoints.up('sm')]: {
        marginRight: 8,
      },
    },
    pointer: {
      cursor: 'pointer',
    },
  }));

  const classes = useStyles(props);

  return (
    <Box
      py={{xs: 1, xl: 3}}
      px={5}
      display='flex'
      flexDirection='row'
      alignItems='center'
      className={classes.appHeader}>
      <Box className={classes.pointer} component='span'>
        <Tooltip title={<IntlMessages id='common.back' />}>
          <KeyboardBackspaceIcon onClick={onClickBackButton} />
        </Tooltip>
      </Box>

      <StatusToggleButton selectedTask={selectedTask} classes={classes} />

      <Box component='span' ml='auto' display={{xs: 'none', sm: 'block'}}>
        <AppsStarredIcon item={selectedTask} onChange={onChangeStarred} />
      </Box>

      <AppsDeleteIcon
        deleteAction={onDeleteTask}
        deleteTitle={<IntlMessages id='todo.deleteMessage' />}
        className={classes.deleteIcon}
      />
    </Box>
  );
};

export default TaskDetailHeader;

TaskDetailHeader.prototype = {
  selectedTask: PropTypes.object.isRequired,
};
