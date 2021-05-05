import axios from 'axios';
import {
  CART_ADD_FAIL,
  CART_ADD_ITEM,
  CART_CHANGE_QTY_ITEM_FAIL,
  CART_CHANGE_QTY_ITEM_SUCCESS,
  CART_LIST_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_REM_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../types';

export const addToCart = (id, qty = 1) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  if (data.message || data.countInStock <= 0) {
    dispatch({
      type: CART_ADD_FAIL,
    });
    return;
  }

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      pId: data._id,
      qty: Number(qty),
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const changeQtyCart = (id, qty = 1) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  if (data.message || qty > data.countInStock) {
    dispatch({
      type: CART_CHANGE_QTY_ITEM_FAIL,
    });
    return;
  }

  dispatch({
    type: CART_CHANGE_QTY_ITEM_SUCCESS,
    payload: {
      pId: data._id,
      qty: Number(qty),
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const remCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REM_ITEM,
    payload: {
      pId: id,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const listProductCart = (pId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CART_LIST_REQUEST,
      payload: pId,
    });

    const { data } = await axios.get('/api/products/' + pId);
    dispatch({
      type: CART_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CART_LIST_FAIL,
      payload: {
        _id: pId,
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems),
    );
  }
};

export const saveShippingAddress = (formData) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: formData,
  });
  localStorage.setItem('shippingAddress', JSON.stringify(formData));
};

export const savePaymentMethod = (formData) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: formData,
  });
  localStorage.setItem('paymentMethod', JSON.stringify(formData));
};
