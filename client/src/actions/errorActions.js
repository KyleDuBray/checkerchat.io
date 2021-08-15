import {
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
} from './types';

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const setTokenError = () => {
  return {
    type: SET_TOKEN_ERROR,
    payload: {
      msg: 'Invalid Token. Please either provide a valid login or sign up.',
    },
  };
};

export const clearTokenError = () => {
  return {
    type: CLEAR_TOKEN_ERROR,
  };
};

export const setEmailError = () => {
  return {
    type: SET_EMAIL_ERROR,
    payload: {
      msg: 'Please enter a valid email.',
    },
  };
};

export const clearEmailError = () => {
  return {
    type: CLEAR_EMAIL_ERROR,
  };
};

export const setPasswordError = () => {
  return {
    type: SET_PASSWORD_ERROR,
    payload: {
      msg: 'Please enter a valid password. It must have at least 6 characters.',
    },
  };
};

export const clearPasswordError = () => {
  return {
    type: CLEAR_PASSWORD_ERROR,
  };
};

export const setRegisterError = () => {
  return {
    type: SET_REGISTER_ERROR,
    payload: {
      msg: 'Register',
    },
  };
};

export const clearRegisterError = () => {
  return {
    type: CLEAR_REGISTER_ERROR,
  };
};

export const setLoginError = () => {
  return {
    type: SET_LOGIN_ERROR,
    payload: {
      msg: 'Invalid credentials',
    },
  };
};

export const clearLoginError = () => {
  return {
    type: CLEAR_LOGIN_ERROR,
  };
};

export const setServerError = () => {
  return {
    type: SET_SERVER_ERROR,
    payload: {
      msg: 'A server error occurred. Please try again later or contact support.',
    },
  };
};

export const clearServerError = () => {
  return {
    type: CLEAR_SERVER_ERROR,
  };
};
