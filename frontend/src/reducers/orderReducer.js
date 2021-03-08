import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAILED,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAILED,
  ORDER_DETAILS_CLEAR,
  ORDER_PAYMENT_REQUEST,
  ORDER_PAYMENT_SUCCESS,
  ORDER_PAYMENT_FAILED,
  ORDER_PAYMENT_CLEAR,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAILED,
  ORDER_LIST_CLEAR,
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
      return { loading: true, orderItems: [], order: {} };
    default:
      return state;
  }
};

export const orderPayReducer = (state = { loading: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_PAYMENT_REQUEST:
      return { loading: true };
    case ORDER_PAYMENT_SUCCESS:
      return { loading: false, success: true };
    case ORDER_PAYMENT_FAILED:
      return { loading: false, error: payload };
    case ORDER_PAYMENT_CLEAR:
      return { loading: false };
    default:
      return state;
  }
};

export const orderListReducer = (state = { loading: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_LIST_REQUEST:
      return { loading: true };
    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: payload };
    case ORDER_LIST_FAILED:
      return { loading: false, error: payload };
    case ORDER_LIST_CLEAR:
      return { loading: false };
    default:
      return state;
  }
};
