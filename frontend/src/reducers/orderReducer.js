import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAILED,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAILED,
  ORDER_DETAILS_CLEAR,
} from '../types';

export const orderCreateReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: payload };
    case ORDER_CREATE_FAILED:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], order: {} },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: payload };
    case ORDER_DETAILS_FAILED:
      return { loading: false, error: payload };
    case ORDER_DETAILS_CLEAR:
      return { loading: false };
    default:
      return state;
  }
};
