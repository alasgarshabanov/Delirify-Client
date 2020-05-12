import React, {useEffect} from 'react';
import TaskDetailHeader from './TaskDetailHeader';
import TaskDetailBody from './TaskDetailBody';
import {useDispatch, useSelector} from 'react-redux';
import {onGetSelectedTask} from '../../../../redux/actions';
import Scrollbar from '@crema/core/Scrollbar';
import {useLocation, withRouter} from 'react-router-dom';

const TaskDetail = () => {
  const dispatch = useDispatch();

  const {pathname} = useLocation();

  useEffect(() => {
    const path = pathname.split('/');
    const id = path[path.length - 1];
    dispatch(onGetSelectedTask(id));
  }, [dispatch, pathname]);

  const selectedTask = useSelector(({todoApp}) => todoApp.selectedTask);

  return (
    <>
      {selectedTask ? (
        <>
          <TaskDetailHeader selectedTask={selectedTask} />

          <Scrollbar className='scroll-app-detail'>
            <TaskDetailBody selectedTask={selectedTask} />
          </Scrollbar>
        </>
      ) : null}
    </>
  );
};

export default withRouter(TaskDetail);
