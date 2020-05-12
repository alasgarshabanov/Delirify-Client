import {
  ADD_BOARD_LIST,
  ADD_LIST_CARD,
  ADD_NEW_BOARD,
  DELETE_BOARD,
  DELETE_LIST,
  DELETE_LIST_CARD,
  EDIT_BOARD_DETAIL,
  EDIT_BOARD_LIST,
  EDIT_LIST_CARD,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_BOARD_DETAIL,
  GET_BOARDS,
  GET_MEMBER_LIST,
  GET_SCRUM_LABEL_LIST,
  SHOW_MESSAGE,
} from '../../shared/constants/ActionTypes';
import Api from '../../@crema/services/ApiConfig';
import IntlMessages from '../../@crema/utility/IntlMessages';
import React from 'react';

export const onGetBoardList = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/scrumboard/board/list')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_BOARDS, payload: data.data});
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

export const onGetScrumLabelList = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/scrumboard/label/list')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_SCRUM_LABEL_LIST, payload: data.data});
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

export const onGetMemberList = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/scrumboard/member/list')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_MEMBER_LIST, payload: data.data});
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

export const onEditBoardDetail = board => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.put('/api/scrumboard/edit/board', {board})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: EDIT_BOARD_DETAIL, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='scrumBoard.boardEdited' />,
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

export const onGetBoardDetail = id => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/scrumboard/board/', {
      params: {
        id: id,
      },
    })
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_BOARD_DETAIL, payload: data.data});
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

export const onAddNewBoard = board => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.post('/api/scrumboard/add/board', {board})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: ADD_NEW_BOARD, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='scrumBoard.boardAdded' />,
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

export const onAddNewList = (boardId, list) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.post('/api/scrumboard/add/list', {boardId, list})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: ADD_BOARD_LIST, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='scrumBoard.listAdded' />,
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

export const onEditBoardList = (boardId, list) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.put('/api/scrumboard/edit/list', {boardId, list})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: EDIT_BOARD_LIST, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='scrumBoard.listEdited' />,
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

export const onAddNewCard = (board, list, card) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.post('/api/scrumboard/add/card', {board, list, card})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: ADD_LIST_CARD, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='scrumBoard.cardAdded' />,
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

export const onEditCardDetails = (board, list, card) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.put('/api/scrumboard/edit/card', {board, list, card})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: EDIT_LIST_CARD, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='scrumBoard.cardEdited' />,
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

export const onDeleteSelectedCard = (boardId, listId, cardId) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.post('/api/scrumboard/delete/card', {boardId, listId, cardId})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: DELETE_LIST_CARD, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='scrumBoard.cardDeleted' />,
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

export const onDeleteSelectedBoard = boardId => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.post('/api/scrumboard/delete/board', {boardId})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: DELETE_BOARD, payload: data.data});
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

export const onDeleteSelectedList = (boardId, listId) => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.post('/api/scrumboard/delete/list', {boardId, listId})
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: DELETE_LIST, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='scrumBoard.listDeleted' />,
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

export const onNullifyBoardDetail = () => {
  return {
    type: GET_BOARD_DETAIL,
    payload: null,
  };
};
