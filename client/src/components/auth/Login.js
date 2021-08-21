import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../actions/authActions';
import {
  setEmailError,
  clearEmailError,
  setPasswordError,
  clearPasswordError,
} from '../../actions/errorActions';
import history from '../../history';

import LoginForm from './LoginForm';
import { validateEmail, validatePassword } from './utilities/validate';

const Login = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const auth = useSelector((state) => state.auth);

  // go to home if already authenticated
  useEffect(() => {
    if (auth.isAuthenticated && !auth.isLoading) {
      history.push('/home');
    }
  }, [auth]);

  const onLoginSubmit = (email, password) => {
    dispatch(login({ email, password }));
  };

  const setErrors = () => {
    const formErrors = {};
    errors.forEach((err) => {
      if (err.type === 'EMAIL_ERROR') {
        formErrors.email = true;
      }
      if (err.type === 'PASSWORD_ERROR') {
        formErrors.password = true;
      }
    });

    return formErrors;
  };

  return (
    <LoginForm
      onSubmit={onLoginSubmit}
      errors={setErrors()}
      validateEmail={validateEmail}
      validatePassword={validatePassword}
    />
  );
};

export default Login;
