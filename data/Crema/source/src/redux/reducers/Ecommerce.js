import {GET_ECOMMERCE_LIST} from '../../shared/constants/ActionTypes';

const initialState = {
  ecommerceList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ECOMMERCE_LIST:
      return {
        ...state,
        ecommerceList: action.payload,
      };

    default:
      return state;
  }
};
