import {
  CART_ADD_FAILED,
  CART_ADD_ITEM,
  CART_CHANGE_QTY_ITEM_SUCCESS,
  CART_CHANGE_QTY_ITEM_FAILED,
  CART_LIST_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_REM_ITEM,
} from '../types/constants';

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
      console.log('qtd >');
      return state;
    case CART_REM_ITEM:
    case CART_ADD_FAILED:
      const { [payload.pId]: _, ...rest } = state.cartItems;

      return {
        ...state,
        cartItems: rest,
      };

    default:
      return state;
  }
};

export const cartListReducer = (state = { products: {} }, action) => {
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
    case CART_LIST_FAIL:
      return {
        products: {
          ...state.products,
          [payload._id]: { ...payload, loading: false },
        },
      };

    default:
      return state;
  }
};
