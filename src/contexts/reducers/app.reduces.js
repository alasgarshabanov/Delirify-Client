import appActions from '../actions/app.actions';
import { appCurrentState } from "../providers/app.context";

export default (state = appCurrentState, action) => {
  // Reducer Body
  switch (action.type) {

    case appActions.ACTION_CHANGE_LANGUAGE:
      return changeLanguage(state, action);

    // default value
    default:
      return state;
  }
};

// Change Language
const changeLanguage = (state, { payload: { locale } }) => {
  return { ...state, locale };
};
