import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as type from '../types';
import {
  listCategoriesNames,
  listFeaturedCategory,
  listFeaturedCategoryItems,
  listFeaturedMessage,
} from './shopActions';

const mockStore = configureMockStore([thunk]);

describe('Shop action creator', () => {
  it('Should Successfully list categories names', () => {
    const mockData = ['test', 'test', 'test'];
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.SHOP_CATEGORIES_REQUEST },
      { type: type.SHOP_CATEGORIES_SUCCESS, payload: mockData },
    ];
    const store = mockStore({});
    return store
      .dispatch(listCategoriesNames())
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Should Fail to list categories names', () => {
    const mockData = 'error';
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({ response: { data: { message: mockData } } }),
    );
    const expectedActions = [
      { type: type.SHOP_CATEGORIES_REQUEST },
      { type: type.SHOP_CATEGORIES_FAIL, payload: mockData },
    ];
    const store = mockStore({});
    return store
      .dispatch(listCategoriesNames())
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });
  it('Should Successfully list featured items of a category', () => {
    const mockData = { test: 'test' };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { message: mockData } }),
    );
    const expectedActions = [
      { type: type.SHOP_FEATURED_CATEGORY_PRODUCTS_REQUEST },
      {
        type: type.SHOP_FEATURED_CATEGORY_PRODUCTS_SUCCESS,
        payload: { message: mockData },
      },
    ];
    const store = mockStore({});
    return store
      .dispatch(listFeaturedCategoryItems())
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });
  it('Should Fail to list featured items of a category', () => {
    const mockData = { test: 'test' };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({ response: { data: { message: mockData } } }),
    );
    const expectedActions = [
      { type: type.SHOP_FEATURED_CATEGORY_PRODUCTS_REQUEST },
      {
        type: type.SHOP_FEATURED_CATEGORY_PRODUCTS_FAIL,
        payload: mockData,
      },
    ];
    const store = mockStore({});
    return store
      .dispatch(listFeaturedCategoryItems())
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Should Successfully list category', () => {
    const mockData = { test: 'test' };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.SHOP_FEATURED_CATEGORY_REQUEST },
      {
        type: type.SHOP_FEATURED_CATEGORY_SUCCESS,
        payload: mockData,
      },
    ];
    const store = mockStore({});
    return store
      .dispatch(listFeaturedCategory())
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Should Fail list category', () => {
    const mockData = { test: 'test' };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({ response: { data: { message: mockData } } }),
    );
    const expectedActions = [
      { type: type.SHOP_FEATURED_CATEGORY_REQUEST },
      {
        type: type.SHOP_FEATURED_CATEGORY_FAIL,
        payload: mockData,
      },
    ];
    const store = mockStore({});
    return store
      .dispatch(listFeaturedCategory())
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Should Successfully Homepage message', () => {
    const mockData = { test: 'test' };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    );
    const expectedActions = [
      { type: type.SHOP_FEATURED_MESSAGE_REQUEST },
      {
        type: type.SHOP_FEATURED_MESSAGE_SUCCESS,
        payload: mockData,
      },
    ];
    const store = mockStore({});
    return store
      .dispatch(listFeaturedMessage())
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Should Fail Homepage message', () => {
    const mockData = { test: 'test' };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({ response: { data: { message: mockData } } }),
    );
    const expectedActions = [
      { type: type.SHOP_FEATURED_MESSAGE_REQUEST },
      {
        type: type.SHOP_FEATURED_MESSAGE_FAIL,
        payload: mockData,
      },
    ];
    const store = mockStore({});
    return store
      .dispatch(listFeaturedMessage())
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });
});
