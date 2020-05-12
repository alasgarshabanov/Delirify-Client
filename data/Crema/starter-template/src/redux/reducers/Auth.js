import {
  SIGNOUT_USER_SUCCESS,
  UPDATE_AUTH_USER,
} from '../../shared/constants/ActionTypes';

const INIT_STATE = {
  user: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_AUTH_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};
