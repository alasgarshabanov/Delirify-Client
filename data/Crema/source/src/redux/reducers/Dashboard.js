import {
  GET_CRM_DATA,
  GET_CRYPTO_DATA,
  GET_METRICS_DATA,
  GET_WIDGETS_DATA,
} from '../../shared/constants/ActionTypes';

const initialState = {
  crmData: null,
  cryptoData: null,
  metricsData: null,
  widgetsData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CRM_DATA:
      return {
        ...state,
        crmData: action.payload,
      };

    case GET_CRYPTO_DATA:
      return {
        ...state,
        cryptoData: action.payload,
      };

    case GET_METRICS_DATA:
      return {
        ...state,
        metricsData: action.payload,
      };

    case GET_WIDGETS_DATA:
      return {
        ...state,
        widgetsData: action.payload,
      };

    default:
      return state;
  }
};
