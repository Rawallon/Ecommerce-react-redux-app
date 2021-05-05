import {
  SHOP_CATEGORIES_REQUEST,
  SHOP_CATEGORIES_SUCCESS,
  SHOP_CATEGORIES_FAIL,
  SHOP_FEATURED_CATEGORY_REQUEST,
  SHOP_FEATURED_CATEGORY_SUCCESS,
  SHOP_FEATURED_CATEGORY_FAIL,
  SHOP_FEATURED_CATEGORY_PRODUCTS_REQUEST,
  SHOP_FEATURED_CATEGORY_PRODUCTS_SUCCESS,
  SHOP_FEATURED_CATEGORY_PRODUCTS_FAIL,
  SHOP_FEATURED_CATEGORY_ITEMS_REQUEST,
  SHOP_FEATURED_CATEGORY_ITEMS_SUCCESS,
  SHOP_FEATURED_CATEGORY_ITEMS_FAIL,
  SHOP_FEATURED_MESSAGE_REQUEST,
  SHOP_FEATURED_MESSAGE_SUCCESS,
  SHOP_FEATURED_MESSAGE_FAIL,
} from '../types';

export const categoriesNamesReducer = (
  state = { loading: true, categoryList: [] },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case SHOP_CATEGORIES_REQUEST:
      return { loading: true, categoryList: [] };
    case SHOP_CATEGORIES_FAIL:
      return { loading: false, error: payload };
    case SHOP_CATEGORIES_SUCCESS:
      return { loading: false, categoryList: payload };
    default:
      return state;
  }
};

export const featuredItemsPerCategoryReducer = (
  state = { loading: true, featuredProducts: {} },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case SHOP_FEATURED_CATEGORY_ITEMS_REQUEST:
      return { loading: true, featuredProducts: {} };
    case SHOP_FEATURED_CATEGORY_ITEMS_FAIL:
      return { loading: false, error: payload };
    case SHOP_FEATURED_CATEGORY_ITEMS_SUCCESS:
      return { loading: false, featuredProducts: payload };
    default:
      return state;
  }
};

export const featuredCategoryReducer = (
  state = { loading: true, featuredCategory: {}, products: {} },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case SHOP_FEATURED_CATEGORY_REQUEST:
      return { loading: true, featuredCategory: {}, products: [] };
    case SHOP_FEATURED_CATEGORY_FAIL:
      return { loading: false, error: payload };
    case SHOP_FEATURED_CATEGORY_SUCCESS:
      return { loading: false, featuredCategory: payload };
    case SHOP_FEATURED_CATEGORY_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case SHOP_FEATURED_CATEGORY_PRODUCTS_FAIL:
      return { ...state, loading: false, error: payload };
    case SHOP_FEATURED_CATEGORY_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: payload };
    default:
      return state;
  }
};

export const featuredMessageReducer = (
  state = { loading: true, featuredMessage: {} },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case SHOP_FEATURED_MESSAGE_REQUEST:
      return { loading: true, featuredMessage: {} };
    case SHOP_FEATURED_MESSAGE_FAIL:
      return { loading: false, error: payload };
    case SHOP_FEATURED_MESSAGE_SUCCESS:
      return { loading: false, featuredMessage: payload };
    default:
      return state;
  }
};
