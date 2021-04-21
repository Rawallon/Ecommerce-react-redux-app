import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_CLEAR,
  PRODUCT_DELETE_ADMIN_REQUEST,
  PRODUCT_DELETE_ADMIN_SUCCESS,
  PRODUCT_DELETE_ADMIN_FAILED,
  PRODUCT_UPDATE_ADMIN_REQUEST,
  PRODUCT_UPDATE_ADMIN_SUCCESS,
  PRODUCT_UPDATE_ADMIN_FAILED,
  PRODUCT_CREATE_ADMIN_REQUEST,
  PRODUCT_CREATE_ADMIN_SUCCESS,
  PRODUCT_CREATE_ADMIN_FAILED,
  PRODUCT_CREATE_REVIEW_CLEAR,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAILED,
  PRODUCT_FEATURED_REQUEST,
  PRODUCT_FEATURED_SUCCESS,
  PRODUCT_FEATURED_FAILED,
} from '../types';

export const productListReducer = (
  state = { products: [], pages: [], page: [] },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: payload.products,
        pages: payload.pages,
        page: payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: payload };
    case PRODUCT_DELETE_ADMIN_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DELETE_ADMIN_SUCCESS:
      var newProducts = state.products.filter((el) => el._id !== payload);
      return {
        ...state,
        loading: false,
        delSuccess: true,
        products: newProducts,
      };
    case PRODUCT_DELETE_ADMIN_FAILED:
      return { ...state, loading: false, delError: payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_CREATE_ADMIN_REQUEST:
    case PRODUCT_UPDATE_ADMIN_REQUEST:
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_ADMIN_SUCCESS:
    case PRODUCT_UPDATE_ADMIN_SUCCESS:
    case PRODUCT_CREATE_REVIEW_SUCCESS:
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: payload };
    case PRODUCT_CREATE_ADMIN_FAILED:
    case PRODUCT_UPDATE_ADMIN_FAILED:
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: payload };
    case PRODUCT_DETAILS_CLEAR:
      return { loading: false, product: { reviews: [] } };

    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: payload };
    case PRODUCT_CREATE_REVIEW_CLEAR:
      return {};

    default:
      return state;
  }
};

export const productTopRatedReducer = (
  state = { loading: true, products: [] },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: payload };
    case PRODUCT_TOP_FAILED:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const productFeaturedReducer = (
  state = { loading: true, products: [] },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_FEATURED_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_FEATURED_SUCCESS:
      return { loading: false, products: payload };
    case PRODUCT_FEATURED_FAILED:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
