import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_ECOMMERCE_LIST,
} from '../../shared/constants/ActionTypes';
import Api from '../../@crema/services/ApiConfig';

export const onGetEcommerceData = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/api/ecommerce/list')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_ECOMMERCE_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: 'Something went wrong, Please try again!',
          });
        }
      })
      .catch(error => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};
