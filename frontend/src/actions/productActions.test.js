import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as type from '../types';
import {
  clearProductDetails,
  clearProductReview,
  createProductReview,
  listCategoryProducts,
  listFeaturedProducts,
  listProductDetails,
  listProductModalDetails,
  listProducts,
  listTopProducts,
} from './productActions';

const mockStore = configureMockStore([thunk]);

describe('Product actions', () => {
  it('Should successfully list products', () => {
    const mockData = { test: true };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.PRODUCT_LIST_REQUEST },
      {
        type: type.PRODUCT_LIST_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({});
    return store.dispatch(listProducts(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to list products', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.PRODUCT_LIST_REQUEST },
      {
        type: type.PRODUCT_LIST_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({});
    return store.dispatch(listProducts({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should successfully list product details', () => {
    const mockData = { test: true };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.PRODUCT_DETAILS_REQUEST },
      {
        type: type.PRODUCT_DETAILS_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({});
    return store.dispatch(listProductDetails(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to list product details', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.PRODUCT_DETAILS_REQUEST },
      {
        type: type.PRODUCT_DETAILS_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({});
    return store.dispatch(listProductDetails({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should successfully return data to modal reducer', () => {
    const mockData = { test: true };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.PRODUCT_MODAL_REQUEST },
      {
        type: type.PRODUCT_MODAL_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({});
    return store.dispatch(listProductModalDetails(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to return data to modal reducer', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.PRODUCT_MODAL_REQUEST },
      {
        type: type.PRODUCT_MODAL_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({});
    return store.dispatch(listProductModalDetails({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should clear product details', () => {
    const expectedActions = [{ type: type.PRODUCT_DETAILS_CLEAR }];
    const store = mockStore({});
    store.dispatch(clearProductDetails());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should successfully list products of a category', () => {
    const mockData = { test: true };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.PRODUCT_LIST_REQUEST },
      {
        type: type.PRODUCT_LIST_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({});
    return store.dispatch(listCategoryProducts(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to list products of a category', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.PRODUCT_LIST_REQUEST },
      {
        type: type.PRODUCT_LIST_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({});
    return store.dispatch(listCategoryProducts({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should successfully post a product review', () => {
    const mockData = { test: true };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.PRODUCT_CREATE_REVIEW_REQUEST },
      {
        type: type.PRODUCT_CREATE_REVIEW_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(createProductReview(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to post a product review', () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.PRODUCT_CREATE_REVIEW_REQUEST },
      {
        type: type.PRODUCT_CREATE_REVIEW_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(createProductReview({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to post a product review since user is not logged in', () => {
    const mockData = { test: true };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.PRODUCT_CREATE_REVIEW_REQUEST },
      {
        type: type.PRODUCT_CREATE_REVIEW_FAIL,
        payload: "Cannot read property 'userInfo' of undefined",
      },
    ];

    const store = mockStore({});
    return store.dispatch(createProductReview(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should clear product review', () => {
    const expectedActions = [{ type: type.PRODUCT_CREATE_REVIEW_CLEAR }];
    const store = mockStore({});
    store.dispatch(clearProductReview());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should successfully list top products', () => {
    const mockData = { test: true };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.PRODUCT_TOP_REQUEST },
      {
        type: type.PRODUCT_TOP_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(listTopProducts(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to list top products', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.PRODUCT_TOP_REQUEST },
      {
        type: type.PRODUCT_TOP_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(listTopProducts({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should successfully list featured products', () => {
    const mockData = { test: true };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.PRODUCT_FEATURED_REQUEST },
      {
        type: type.PRODUCT_FEATURED_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(listFeaturedProducts(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should fail to list featured products', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error')),
    );
    const expectedActions = [
      { type: type.PRODUCT_FEATURED_REQUEST },
      {
        type: type.PRODUCT_FEATURED_FAIL,
        payload: 'error',
      },
    ];

    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store.dispatch(listFeaturedProducts({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
