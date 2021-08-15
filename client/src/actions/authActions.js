import axios from 'axios';
import { setTokenError, setLoginError, setRegisterError } from './errorActions';
import history from '../history';

import {
  USER_LOADING,
  USER_LOADED,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  CLEAR_ERRORS,
  SET_TOKEN_ERROR,
  CLEAR_TOKEN_ERROR,
  SET_EMAIL_ERROR,
  CLEAR_EMAIL_ERROR,
  SET_PASSWORD_ERROR,
  CLEAR_PASSWORD_ERROR,
  SET_REGISTER_ERROR,
  CLEAR_REGISTER_ERROR,
  SET_LOGIN_ERROR,
  CLEAR_LOGIN_ERROR,
  SET_SERVER_ERROR,
  CLEAR_SERVER_ERROR,
  RESET_TOKEN,
} from './types';

// Check token & load user
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
    })
    .catch((err) => {
      console.log(err);
      dispatch(setTokenError());
      dispatch({ type: RESET_TOKEN });
    });
};

// Register User
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

    axios
      .post('/api/users', body, config)
      .then((res) =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(setRegisterError());
        dispatch({
          type: RESET_TOKEN,
        });
      });
  };

// Login User
export const login =
  ({ email, password }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Request body
    const body = JSON.stringify({ email, password });

    axios
      .post('/api/auth', body, config)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
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
