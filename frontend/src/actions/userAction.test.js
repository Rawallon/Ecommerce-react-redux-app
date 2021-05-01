import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as type from '../types';

import {
  axiosTest,
  login,
  logout,
  register,
  updateUserProfile,
} from './userAction';

const mockStore = configureMockStore([thunk]);

describe('User Action', () => {
  it('Sucessfull login', async () => {
    const mockUser = {
      _id: '1',
      name: 'Test',
      email: 'test@test.com',
      token: 'test',
    };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: mockUser }),
    );

    const expectedActions = [
      { type: type.USER_LOGIN_REQUEST },
      { type: type.USER_LOGIN_SUCCESS, payload: mockUser },
    ];

    const store = mockStore({});
    return store
      .dispatch(login())
      .then((a) => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Unsucessfull login', async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.reject({ data: { response: 'nope' } }),
    );
    const expectedActions = [
      { type: type.USER_LOGIN_REQUEST },
      { type: type.USER_LOGIN_FAILED },
    ];
    const store = mockStore({});
    return store
      .dispatch(login())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Logout', async () => {
    const expectedActions = [{ type: type.USER_LOGOUT }];
    const store = mockStore({});
    return store
      .dispatch(logout())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Register Sucessfull', async () => {
    const mockUser = {
      _id: '1',
      name: 'Test',
      email: 'test@test.com',
      token: 'test',
      pw: 'test',
    };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: mockUser }),
    );
    const expectedActions = [
      { type: type.USER_REGISTER_REQUEST },
      { type: type.USER_REGISTER_SUCCESS },
      { type: type.USER_LOGIN_SUCCESS, payload: mockUser },
    ];
    const store = mockStore({});
    return store
      .dispatch(register(mockUser.name, mockUser.email, mockUser.pw))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Register Unsucessfull', async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.reject({ data: { response: 'error!' } }),
    );
    const expectedActions = [
      { type: type.USER_REGISTER_REQUEST },
      { type: type.USER_REGISTER_FAILED },
    ];
    const store = mockStore({});
    return store
      .dispatch(register('', '', ''))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Successfully update user data', async () => {
    mockAxios.patch.mockImplementationOnce(() =>
      Promise.resolve({ data: { result: 'test' } }),
    );

    const expectedActions = [
      { type: type.USER_UPDATE_PROFILE_REQUEST },
      {
        type: type.USER_UPDATE_PROFILE_SUCCESS,
        payload: { result: 'test' },
      },
    ];
    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store
      .dispatch(updateUserProfile('test'))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Fail to Update user data', async () => {
    mockAxios.patch.mockImplementationOnce(() =>
      Promise.reject({ message: 'nope' }),
    );

    const expectedActions = [
      { type: type.USER_UPDATE_PROFILE_REQUEST },
      {
        type: type.USER_UPDATE_PROFILE_FAILED,
        payload: 'nope',
      },
    ];
    const store = mockStore({ userLogin: { userInfo: { token: 'token' } } });
    return store
      .dispatch(updateUserProfile('test'))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
