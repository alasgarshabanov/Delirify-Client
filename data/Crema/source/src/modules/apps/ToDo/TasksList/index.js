import React, {useEffect, useState} from 'react';
import Scrollbar from '@crema/core/Scrollbar';
import {useDispatch, useSelector} from 'react-redux';
import {
  onGetTaskList,
  onUpdateTaskStarredStatus,
} from '../../../../redux/actions';
import TaskContentHeader from './TaskContentHeader';
import TaskListItem from './TaskListItem';
import List from '@material-ui/core/List';
import {useLocation} from 'react-router-dom';
import EmptyResult from '../../../../@crema/core/EmptyResult';
import AddNewTask from '../AddNewTask';
import {Hidden, makeStyles} from '@material-ui/core';
import AppsPagination from '../../../../@crema/core/AppsPagination';
import {grey} from '@material-ui/core/colors';

const TasksList = () => {
  const dispatch = useDispatch();

  const {pathname} = useLocation();

  const taskList = useSelector(({todoApp}) => todoApp.taskList);

  const totalTasks = useSelector(({todoApp}) => todoApp.totalTasks);

  const labelList = useSelector(({todoApp}) => todoApp.labelList);

  const loading = useSelector(({common}) => common.loading);

  const [filterText, onSetFilterText] = useState('');

  const [page, setPage] = useState(0);

  const [checkedTasks, setCheckedTasks] = useState([]);

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    dispatch(onGetTaskList(path[path.length - 2], path[path.length - 1], page));
  }, [dispatch, page, pathname]);

  const isShowEmptyListMessage = () => {
    return filterText === '' && taskList.length === 0 && !loading;
  };

  const onOpenAddTask = () => {
    setAddTaskOpen(true);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const onChangeCheckedTasks = (event, id) => {
    if (event.target.checked) {
      setCheckedTasks(checkedTasks.concat(id));
    } else {
      setCheckedTasks(checkedTasks.filter(taskId => taskId !== id));
    }
  };

  const onChangeStarred = (checked, task) => {
    const status = checked;
    const selectedIdList = [task.id];
    const path = pathname.split('/');
    dispatch(
      onUpdateTaskStarredStatus(selectedIdList, status, path[path.length - 1]),
    );
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return taskList;
    } else {
      return taskList.filter(task =>
        task.title.toUpperCase().includes(filterText.toUpperCase()),
      );
    }
  };

  const list = onGetFilteredItems();

  const useStyles = makeStyles(theme => ({
    list: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    truncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    pagination: {
      paddingRight: 8,
      paddingLeft: 8,
      borderColor: grey[300],
      borderTopWidth: 1,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <TaskContentHeader
        checkedTasks={checkedTasks}
        setCheckedTasks={setCheckedTasks}
        filterText={filterText}
        onSetFilterText={onSetFilterText}
        onPageChange={onPageChange}
        page={page}
      />
      <Scrollbar className='scroll-app'>
        {!isShowEmptyListMessage() ? (
          <List className={classes.list}>
            {list.map(task => {
              return (
                <TaskListItem
                  key={task.id}
                  task={task}
                  labelList={labelList}
                  onChangeCheckedTasks={onChangeCheckedTasks}
                  checkedTasks={checkedTasks}
                  onChangeStarred={onChangeStarred}
                />
              );
            })}
          </List>
        ) : (
          <EmptyResult actionTitle='Add Task' onAction={onOpenAddTask} />
        )}
      </Scrollbar>

      <Hidden smUp>
        {taskList.length > 0 ? (
          <AppsPagination
            className={classes.pagination}
            count={totalTasks}
            page={page}
            onPageChange={onPageChange}
          />
        ) : null}
      </Hidden>

      {isAddTaskOpen ? (
        <AddNewTask
          isAddTaskOpen={isAddTaskOpen}
          onCloseAddTask={onCloseAddTask}
        />
      ) : null}
    </>
  );
};

export default TasksList;
