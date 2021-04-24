import {
  CART_ADD_FAILED,
  CART_ADD_ITEM,
  CART_CHANGE_QTY_ITEM_SUCCESS,
  CART_CHANGE_QTY_ITEM_FAILED,
  CART_LIST_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_REM_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../types';

export const cartReducer = (
  state = { cartItems: {}, shippingAddress: [] },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case CART_CHANGE_QTY_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: { ...state.cartItems, [payload.pId]: payload.qty },
      };
    case CART_ADD_ITEM:
      let qty = payload.qty;
      if (!!state.cartItems[payload.pId])
        qty = state.cartItems[payload.pId] + payload.qty;

      return {
        ...state,
        cartItems: { ...state.cartItems, [payload.pId]: qty },
      };
    case CART_CHANGE_QTY_ITEM_FAILED:
      return state;
    case CART_REM_ITEM:
    case CART_ADD_FAILED:
      const { [payload.pId]: _, ...res } = state.cartItems;
      return {
        ...state,
        cartItems: res,
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload,
      };
    case CART_LIST_FAIL:
      const { [payload._id]: __, ...restFail } = state.cartItems;
      return {
        ...state,
        cartItems: restFail,
        error: payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const cartListReducer = (
  state = { products: {}, cartItems: {} },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case CART_LIST_REQUEST:
      return {
        products: { ...state.products, [payload]: { loading: true } },
      };
    case CART_LIST_SUCCESS:
      return {
        products: {
          ...state.products,
          [payload._id]: { ...payload, loading: false },
        },
      };
    case CART_REM_ITEM:
      const { [payload.pId]: _, ...rest } = state.products;
      return {
        ...state,
        products: rest,
        loading: false,
      };

    default:
      return state;
  }
};
