import {
  CREATE_NEW_TASK,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_TASK_DETAIL,
  GET_TASK_LIST,
  GET_TODO_FOLDER_LIST,
  GET_TODO_LABEL_LIST,
  GET_TODO_PRIORITY_LIST,
  GET_TODO_STAFF_LIST,
  GET_TODO_STATUS_LIST,
  SHOW_MESSAGE,
  TOGGLE_TODO_DRAWER,
  UPDATE_TASK_DETAIL,
  UPDATE_TASK_FOLDER,
  UPDATE_TASK_LABEL,
  UPDATE_TASK_STARRED_STATUS,
} from '../../shared/constants/ActionTypes';
import Api from '../../@crema/services/ApiConfig';
import IntlMessages from '../../@crema/utility/IntlMessages';
import React from 'react';

export const onGetTaskList = (type, name, currentPage) => {
  const page = currentPage ? currentPage : null;
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/todo/task/list', {
      params: {
        type: type,
        name: name,
        page: page,
      },
    })
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_TASK_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onToggleTodoDrawer = () => {
  return dispatch => {
    dispatch({type: TOGGLE_TODO_DRAWER});
  };
};

export const onGetToDoLabelList = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/todo/labels/list')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_TODO_LABEL_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onGetToDoStaffList = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/todo/staff/list')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_TODO_STAFF_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onGetToDoPriorityList = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/todo/priority/list')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_TODO_PRIORITY_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onGetToDoFolderList = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/todo/folders/list')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_TODO_FOLDER_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onGetToDoStatusList = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/todo/status/list')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_TODO_STATUS_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onUpdateTaskLabels = (taskIds, type) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.put('/api/todo/update/label', {taskIds, type})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_TASK_LABEL, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='message.labelUpdatedTo' />,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onUpdateTaskStarredStatus = (taskIds, status, folderName) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.put('/api/todo/update/starred', {taskIds, status})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: UPDATE_TASK_STARRED_STATUS,
            payload: {data: data.data, folderName: folderName},
          });
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='message.starredStatus' />,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onDeleteSelectedTasks = (taskIds, type, name, page) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.put('/api/todo/update/folder', {taskIds, type, name, page})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_TASK_FOLDER, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='task.deleted' />,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onCreateTask = task => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.post('/api/todoApp/compose', {task})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: CREATE_NEW_TASK, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='task.created' />,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onGetSelectedTask = id => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get(`/api/todoApp/task/`, {
      params: {
        id: id,
      },
    })
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_TASK_DETAIL, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onUpdateSelectedTask = task => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.put('/api/todoApp/task/', {task})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_TASK_DETAIL, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload:
              task.folderValue === 126 ? (
                <IntlMessages id='task.deleted' />
              ) : (
                <IntlMessages id='task.updated' />
              ),
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};
