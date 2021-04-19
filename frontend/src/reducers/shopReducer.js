import {
  SHOP_CATEGORIES_REQUEST,
  SHOP_CATEGORIES_SUCCESS,
  SHOP_CATEGORIES_FAILED,
  SHOP_FEATURED_CATEGORY_REQUEST,
  SHOP_FEATURED_CATEGORY_SUCCESS,
  SHOP_FEATURED_CATEGORY_FAILED,
} from '../types';

export const categoriesNamesReducer = (
  state = { loading: true, categoryList: [] },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case SHOP_CATEGORIES_REQUEST:
      return { loading: true, categoryList: [] };
    case SHOP_CATEGORIES_FAILED:
      return { loading: false, error: payload };
    case SHOP_CATEGORIES_SUCCESS:
      return { loading: false, categoryList: payload };
    default:
      return state;
  }
};

export const featuredCategoryReducer = (
  state = { loading: true, featuredProducts: {} },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case SHOP_FEATURED_CATEGORY_REQUEST:
      return { loading: true, featuredProducts: {} };
    case SHOP_FEATURED_CATEGORY_FAILED:
      return { loading: false, error: payload };
    case SHOP_FEATURED_CATEGORY_SUCCESS:
      return { loading: false, featuredProducts: payload };
    default:
      return state;
  }
};
