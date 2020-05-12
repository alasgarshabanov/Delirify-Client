import {
  SIGNOUT_JWT_USER_SUCCESS,
  UPDATE_JWT_AUTH_USER,
} from '../../shared/constants/ActionTypes';

const INIT_STATE = {
  user: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_JWT_AUTH_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SIGNOUT_JWT_USER_SUCCESS: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};
