import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as type from '../types';
import {
  addToCart,
  changeQtyCart,
  listProductCart,
  remCart,
  saveShippingAddress,
  savePaymentMethod,
} from './cartActions';

const mockStore = configureMockStore([thunk]);

describe('Cart actions', () => {
  it('Should successfully add item to cart', () => {
    const mockData = [1, 2];
    const localStorageData = { test: 'test' };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { _id: mockData[0] } }),
    );
    const expectedActions = [
      {
        type: type.CART_ADD_ITEM,
        payload: {
          pId: mockData[0],
          qty: mockData[1],
        },
      },
    ];

    const store = mockStore({ cart: { cartItems: localStorageData } });
    return store.dispatch(addToCart(mockData[0], mockData[1])).then(() => {
      expect(localStorage.getItem('cartItems')).toEqual(
        JSON.stringify(localStorageData),
      );
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to add item to cart', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          message: 'Product not found',
        },
      }),
    );
    const expectedActions = [{ type: type.CART_ADD_FAIL }];
    const store = mockStore({ cart: { cartItems: {} } });
    return store
      .dispatch(addToCart(0, 0))
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Should successfully change item quantity', () => {
    const mockData = [1, 2];
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { _id: mockData[0] } }),
    );
    const expectedActions = [
      {
        type: type.CART_CHANGE_QTY_ITEM_SUCCESS,
        payload: {
          pId: mockData[0],
          qty: mockData[1],
        },
      },
    ];
    const store = mockStore({ cart: { cartItems: { test: 'test' } } });

    return store
      .dispatch(changeQtyCart(mockData[0], mockData[1]))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Should fail to change item quantity', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          message: 'Product not found',
        },
      }),
    );
    const expectedActions = [{ type: type.CART_CHANGE_QTY_ITEM_FAIL }];
    const store = mockStore({ cart: { cartItems: {} } });
    return store
      .dispatch(changeQtyCart(0, 0))
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Should remove item from cart', () => {
    const expectedActions = [
      {
        type: type.CART_REM_ITEM,
        payload: {
          pId: 1,
        },
      },
    ];
    const store = mockStore({ cart: { cartItems: {} } });
    store.dispatch(remCart(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should successfully list item on cart', () => {
    const mockData = 1;
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { _id: mockData } }),
    );
    const expectedActions = [
      {
        type: type.CART_LIST_REQUEST,
        payload: mockData,
      },
      {
        type: type.CART_LIST_SUCCESS,
        payload: {
          _id: mockData,
        },
      },
    ];
    const store = mockStore({ cart: { cartItems: {} } });
    return store
      .dispatch(listProductCart(mockData))
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Should fail to list item on cart', () => {
    const mockData = [1, 'fail'];
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({ response: { data: { message: mockData[1] } } }),
    );
    const expectedActions = [
      {
        type: type.CART_LIST_REQUEST,
        payload: mockData[0],
      },
      {
        type: type.CART_LIST_FAIL,
        payload: {
          _id: mockData[0],
          error: mockData[1],
        },
      },
    ];
    const store = mockStore({ cart: { cartItems: {} } });
    return store
      .dispatch(listProductCart(mockData[0]))
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Should Save shipping Address on localStorage', () => {
    const mockData = { data: 'text' };
    const expectedActions = [
      {
        type: type.CART_SAVE_SHIPPING_ADDRESS,
        payload: mockData,
      },
    ];
    const store = mockStore({});
    store.dispatch(saveShippingAddress(mockData));

    const actions = store.getActions();
    expect(localStorage.getItem('shippingAddress')).toEqual(
      JSON.stringify(mockData),
    );
    expect(actions).toEqual(expectedActions);
  });

  it('Should Save Payment Method on localStorage', () => {
    const mockData = { data: 'text' };
    const expectedActions = [
      {
        type: type.CART_SAVE_PAYMENT_METHOD,
        payload: mockData,
      },
    ];
    const store = mockStore({});
    store.dispatch(savePaymentMethod(mockData));

    const actions = store.getActions();
    expect(localStorage.getItem('shippingAddress')).toEqual(
      JSON.stringify(mockData),
    );
    expect(actions).toEqual(expectedActions);
  });
});
