import currentUserActions from '../actions/currentUser.actions';
import { currentUserInitialState } from '../providers/currentUser.context';
import { saveStorageKey } from "../../utils/localStorage";
import { CURRENT_USER_STORAGE_KEY } from "../../config";

export default (state, action) => {
  switch(action.type) {

    // Loading when request sent to the server
    case currentUserActions.LOADING:
      return {...state, isLoading: true};

    // When user logged out
    case currentUserActions.LOG_OUT:
      return logOut(currentUserInitialState);

    case currentUserActions.SET_AUTHORIZED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.payload
      };

    case currentUserActions.SET_UNAUTHORIZED:
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
};

const logOut = (state) => {
  saveStorageKey(CURRENT_USER_STORAGE_KEY);
  return state;
};
