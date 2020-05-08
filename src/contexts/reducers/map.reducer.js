import { mapInitialState, registrationActions} from '../providers/map.context';
import mapActions  from '../actions/map.actions';

export default (state = mapInitialState, action) => {

  switch (action.type) {

    case mapActions.SET_NEW_LOCATION:
      return resetMobileVerification(state);

    case mapActions.RESET_MAP_ALL_DATA:
      return resetMobileVerification(state);

    default:
      return state;
  }
};

const resetMobileVerification = (state) => {
  return mapInitialState;
};
