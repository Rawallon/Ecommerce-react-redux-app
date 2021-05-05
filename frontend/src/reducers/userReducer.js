import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_CLEAR,
  USER_UPDATE_ADMIN_REQUEST,
  USER_UPDATE_ADMIN_SUCCESS,
  USER_UPDATE_ADMIN_FAIL,
  USER_LIST_DETAILS_REQUEST,
  USER_LIST_DETAILS_SUCCESS,
  USER_LIST_DETAILS_FAIL,
} from '../types';

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, userInfo: {} };
    case USER_UPDATE_PROFILE_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false };
    case USER_REGISTER_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (
  state = { loading: false },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (
  state = {
    users: [],
    pages: [],
    page: [],
  },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LIST_DETAILS_REQUEST:
    case USER_UPDATE_ADMIN_REQUEST:
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: payload.users,
        pages: payload.pages,
        page: payload.page,
      };
    case USER_UPDATE_ADMIN_SUCCESS:
      return { loading: false, success: true };
    case USER_LIST_DETAILS_SUCCESS:
      return { loading: false, user: payload };
    case USER_LIST_DETAILS_FAIL:
    case USER_UPDATE_ADMIN_FAIL:
    case USER_LIST_FAIL:
      return { loading: false, error: payload };
    case USER_LIST_CLEAR:
      return {};
    default:
      return state;
  }
};
