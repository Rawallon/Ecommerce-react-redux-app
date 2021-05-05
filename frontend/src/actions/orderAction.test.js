import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as type from '../types';
import {
  createOrder,
  clearCreateOrder,
  getOrderDetails,
  clearOrderDetails,
  getOrderList,
  clearOrderList,
  clearPaymentDetails,
  setOrderPayment,
  setAsDeliveredAdmin,
} from './orderAction';

const mockStore = configureMockStore([thunk]);

describe('Order actions', () => {
  it('Should successfully create order', () => {
    const mockData = { test: true };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.ORDER_CREATE_REQUEST },
      {
        type: type.ORDER_CREATE_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(createOrder(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to create order', () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.ORDER_CREATE_REQUEST },
      {
        type: type.ORDER_CREATE_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(createOrder({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to create order since user is not logged in', () => {
    const mockData = { test: true };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.ORDER_CREATE_REQUEST },
      {
        type: type.ORDER_CREATE_FAIL,
        payload: "Cannot read property 'userInfo' of undefined",
      },
    ];

    const store = mockStore({});
    return store.dispatch(createOrder(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should clear create store', () => {
    const expectedActions = [{ type: type.ORDER_CREATE_CLEAR }];
    const store = mockStore({});
    store.dispatch(clearCreateOrder());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should successfully fetch order details', () => {
    const mockData = { test: true };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.ORDER_DETAILS_REQUEST },
      {
        type: type.ORDER_DETAILS_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(getOrderDetails(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to fetch order details', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.ORDER_DETAILS_REQUEST },
      {
        type: type.ORDER_DETAILS_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(getOrderDetails({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to fetch order since user is not logged in', () => {
    const mockData = { test: true };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.ORDER_DETAILS_REQUEST },
      {
        type: type.ORDER_DETAILS_FAIL,
        payload: "Cannot read property 'userInfo' of undefined",
      },
    ];

    const store = mockStore({});
    return store.dispatch(getOrderDetails(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should clear getDetails store', () => {
    const expectedActions = [{ type: type.ORDER_DETAILS_CLEAR }];
    const store = mockStore({});
    store.dispatch(clearOrderDetails());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should successfully get order list', () => {
    const mockData = { test: true };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.ORDER_LIST_REQUEST },
      {
        type: type.ORDER_LIST_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(getOrderList(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to fetch order list', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.ORDER_LIST_REQUEST },
      {
        type: type.ORDER_LIST_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(getOrderList({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to fetch order since user is not logged in', () => {
    const mockData = { test: true };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.ORDER_LIST_REQUEST },
      {
        type: type.ORDER_LIST_FAIL,
        payload: "Cannot read property 'userInfo' of undefined",
      },
    ];

    const store = mockStore({});
    return store.dispatch(getOrderList(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should clear OrderList store', () => {
    const expectedActions = [{ type: type.ORDER_LIST_CLEAR }];
    const store = mockStore({});
    store.dispatch(clearOrderList());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should clear PaymentDetails store', () => {
    const expectedActions = [{ type: type.ORDER_PAYMENT_CLEAR }];
    const store = mockStore({});
    store.dispatch(clearPaymentDetails());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should successfully set payment', () => {
    const mockData = { orderId: 1, payRes: {} };
    mockAxios.put.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.ORDER_PAYMENT_REQUEST },
      {
        type: type.ORDER_PAYMENT_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(setOrderPayment(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to set payment', () => {
    mockAxios.put.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.ORDER_PAYMENT_REQUEST },
      {
        type: type.ORDER_PAYMENT_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(setOrderPayment({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to set payment since user is not logged in', () => {
    const mockData = { test: true };
    mockAxios.put.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.ORDER_PAYMENT_REQUEST },
      {
        type: type.ORDER_PAYMENT_FAIL,
        payload: "Cannot read property 'userInfo' of undefined",
      },
    ];

    const store = mockStore({});
    return store.dispatch(setOrderPayment(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should successfully set order as delivered', () => {
    const mockData = { orderId: 1, payRes: {} };
    mockAxios.put.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.ORDER_DETAILS_REQUEST },
      {
        type: type.ORDER_DETAILS_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(setAsDeliveredAdmin(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to set order as delivered', () => {
    mockAxios.put.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.ORDER_DETAILS_REQUEST },
      {
        type: type.ORDER_DETAILS_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(setAsDeliveredAdmin({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
