import React from 'react';
import Api from '../../@crema/services/ApiConfig';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_CRM_DATA,
  GET_CRYPTO_DATA,
  GET_METRICS_DATA,
  GET_WIDGETS_DATA,
} from '../../shared/constants/ActionTypes';
import IntlMessages from '../../@crema/utility/IntlMessages';

export const onGetCrmData = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/dashboard/crm')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_CRM_DATA, payload: data.data});
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

export const onGetCryptoData = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/dashboard/crypto')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_CRYPTO_DATA, payload: data.data});
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

export const onGetMetricsData = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/dashboard/metrics')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_METRICS_DATA, payload: data.data});
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

export const onGetWidgetsData = () => {
  return dispatch => {
    dispatch({type: FETCH_START});
    Api.get('/dashboard/widgets')
      .then(data => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_WIDGETS_DATA, payload: data.data});
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
