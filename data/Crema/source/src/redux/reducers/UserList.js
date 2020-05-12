import {GET_USER_LIST} from '../../shared/constants/ActionTypes';

const initialState = {
  usersList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        usersList: action.payload,
      };

    default:
      return state;
  }
};
