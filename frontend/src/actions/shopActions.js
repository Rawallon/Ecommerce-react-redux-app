import axios from 'axios';
import {
  SHOP_CATEGORIES_REQUEST,
  SHOP_CATEGORIES_SUCCESS,
  SHOP_CATEGORIES_FAIL,
  SHOP_FEATURED_CATEGORY_REQUEST,
  SHOP_FEATURED_CATEGORY_SUCCESS,
  SHOP_FEATURED_CATEGORY_FAIL,
  SHOP_FEATURED_CATEGORY_ITEMS_REQUEST,
  SHOP_FEATURED_CATEGORY_ITEMS_SUCCESS,
  SHOP_FEATURED_CATEGORY_ITEMS_FAIL,
  SHOP_FEATURED_MESSAGE_REQUEST,
  SHOP_FEATURED_MESSAGE_SUCCESS,
  SHOP_FEATURED_MESSAGE_FAIL,
  SHOP_FEATURED_CATEGORY_PRODUCTS_REQUEST,
  SHOP_FEATURED_CATEGORY_PRODUCTS_SUCCESS,
  SHOP_FEATURED_CATEGORY_PRODUCTS_FAIL,
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
      type: SHOP_CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listFeaturedCategoryItems = (selectedCategory) => async (
  dispatch,
) => {
  try {
    dispatch({
      type: SHOP_FEATURED_CATEGORY_PRODUCTS_REQUEST,
    });
    const { data } = await axios.get(
      `/api/products/featured/${selectedCategory}?pageSize=6`,
    );
    dispatch({
      type: SHOP_FEATURED_CATEGORY_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOP_FEATURED_CATEGORY_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listFeaturedCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: SHOP_FEATURED_CATEGORY_REQUEST,
    });
    const { data } = await axios.get(`/api/homepage/featCategory`);
    dispatch({
      type: SHOP_FEATURED_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOP_FEATURED_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listFeaturedMessage = () => async (dispatch) => {
  try {
    dispatch({
      type: SHOP_FEATURED_MESSAGE_REQUEST,
    });
    const { data } = await axios.get(`/api/homepage/message`);
    dispatch({
      type: SHOP_FEATURED_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOP_FEATURED_MESSAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
