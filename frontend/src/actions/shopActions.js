import axios from 'axios';
import {
  SHOP_CATEGORIES_REQUEST,
  SHOP_CATEGORIES_SUCCESS,
  SHOP_CATEGORIES_FAILED,
  SHOP_FEATURED_CATEGORY_REQUEST,
  SHOP_FEATURED_CATEGORY_SUCCESS,
  SHOP_FEATURED_CATEGORY_FAILED,
} from '../types';

export const listCategoriesNames = () => async (dispatch) => {
  try {
    dispatch({
      type: SHOP_CATEGORIES_REQUEST,
    });
    const { data } = await axios.get(`/api/products/category/name`);
    dispatch({
      type: SHOP_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOP_CATEGORIES_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listFeaturedCategories = (selectedCategory) => async (
  dispatch,
) => {
  try {
    dispatch({
      type: SHOP_FEATURED_CATEGORY_REQUEST,
    });
    const { data } = await axios.get(
      `/api/products/featured/${selectedCategory}`,
    );
    dispatch({
      type: SHOP_FEATURED_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOP_FEATURED_CATEGORY_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
