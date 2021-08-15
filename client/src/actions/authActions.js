import axios from 'axios';
import {
  setTokenError,
  clearTokenError,
  setLoginError,
  clearLoginError,
  setRegisterError,
  clearRegisterError,
} from './errorActions';
import history from '../history';

import {
  USER_LOADING,
  USER_LOADED,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  RESET_TOKEN,
} from './types';

// Check token in local storage & load user
// 1) -> USER_LOADING...(auth)
// 2)  SUCCESS -> USER_LOADED(auth), clearTokenError(errors)
//     FAIL -> setTokenError(errors), RESET_TOKEN(auth),
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get('http://localhost:4000/api/auth', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
      dispatch(clearTokenError());
    })
    .catch((err) => {
      dispatch(setTokenError());
      dispatch({ type: RESET_TOKEN });
    });
};

// Register User
// 1) -> USER_LOADING...(auth)
// 2)  SUCCESS -> REGISTER_SUCCESS(auth), clearRegisterError(errors)
//     FAIL -> setRegisterError(errors), RESET_TOKEN(auth)
export const register =
  ({ name, email, password }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Request body
    const body = JSON.stringify({ name, email, password });

    // Set Loading to true
    dispatch({ type: USER_LOADING });

    axios
      .post('/api/users', body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        dispatch(clearRegisterError());
      })
      .catch((err) => {
        dispatch(setRegisterError());
        dispatch({
          type: RESET_TOKEN,
        });
      });
  };

// Login User
// 1) -> USER_LOADING...(auth)
// 2)  SUCCESS -> LOGIN_SUCCESS(auth), clearLoginError(errors)
//     FAIL -> setLoginError(errors), RESET_TOKEN(auth)
export const login =
  ({ email, password }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Set Loading to true
    dispatch({ type: USER_LOADING });

    // Request body
    const body = JSON.stringify({ email, password });

    axios
      .post('/api/auth', body, config)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        dispatch(clearLoginError());
        history.push('/home');
      })
      .catch((err) => {
        dispatch(setLoginError());
        dispatch({
          type: RESET_TOKEN,
        });
      });
  };

// Logout User
export const logout = () => {
  history.push('/login');
  return {
    type: LOGOUT_SUCCESS,
  };
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from local storage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
