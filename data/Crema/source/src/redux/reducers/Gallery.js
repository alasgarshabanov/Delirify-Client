import {GET_GALLERY_PHOTO} from '../../shared/constants/ActionTypes';

const initialState = {
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GALLERY_PHOTO:
      return {
        ...state,
        photos: action.payload,
      };

    default:
      return state;
  }
};
