import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_DETAILS_FAILED,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_FAILED,
} from '../types';

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_LOGIN_FAILED:
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
    case USER_REGISTER_FAILED:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false };
    case USER_DETAILS_FAILED:
      return { loading: false, error: payload };
    case USER_LOGOUT:
      return {};
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
    case USER_UPDATE_PROFILE_FAILED:
      return { loading: false, error: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
