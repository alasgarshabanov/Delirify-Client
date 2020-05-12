import {
  CREATE_NEW_CONTACT,
  DELETE_CONTACT,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_CONTACT_FOLDER_LIST,
  GET_CONTACT_LABEL_LIST,
  GET_CONTACT_LIST,
  SHOW_MESSAGE,
  TOGGLE_CONTACT_DRAWER,
  UPDATE_CONTACT_DETAIL,
  UPDATE_CONTACT_LABEL,
  UPDATE_CONTACT_STARRED_STATUS,
} from '../../shared/constants/ActionTypes';
import Api from '../../@crema/services/ApiConfig';
import IntlMessages from '../../@crema/utility/IntlMessages';
import React from 'react';

export const onGetContactList = (type, name, currentPage) => {
  const page = currentPage ? currentPage : 0;
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/contactApp/contact/List', {
      params: {
        type: type,
        name: name,
        page: page,
      },
    })
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_CONTACT_LIST, payload: data.data});
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

export const onGetLabelList = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/contactApp/labels/list')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_CONTACT_LABEL_LIST, payload: data.data});
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

export const onGetFolderList = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/contactApp/folders/list')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_CONTACT_FOLDER_LIST, payload: data.data});
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

export const onToggleContactDrawer = () => {
  return dispatch => {
    dispatch({type: TOGGLE_CONTACT_DRAWER});
  };
};

export const onUpdateContactLabel = (contactIds, type, labelName) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.put('/api/contactApp/update/label', {contactIds, type})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: UPDATE_CONTACT_LABEL,
            payload: {data: data.data, labelName: labelName, labelType: type},
          });
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='message.labelUpdated' />,
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

export const onUpdateStarredStatus = (contactIds, status, folderName) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.put('/api/contactApp/update/starred', {contactIds, status})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: UPDATE_CONTACT_STARRED_STATUS,
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

export const onDeleteContacts = (type, name, contactIds, page) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.post('/api/contactApp/delete/contact', {type, name, contactIds, page})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: DELETE_CONTACT, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='message.contactDeleted' />,
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

export const onUpdateSelectedContact = contact => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.put('/api/contactApp/contact/', {contact})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_CONTACT_DETAIL, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='message.contactUpdated' />,
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

export const onCreateContact = contact => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.post('/api/contactApp/compose', {contact})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: CREATE_NEW_CONTACT, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='message.contactCreated' />,
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
