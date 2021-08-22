import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../actions/authActions';

import history from '../../history';

import LoginForm from './LoginForm';
import { validateEmail, validatePassword } from './utilities/validate';

const Login = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const auth = useSelector((state) => state.auth);

  // Go to home if already authenticated
  useEffect(() => {
    if (auth.isAuthenticated && !auth.isLoading) {
      history.push('/home');
    }
  }, [auth]);

  const onLoginSubmit = (email, password) => {
    dispatch(login({ email, password }));
  };

  // Set errors for specific form fields based on
  // errors in redux store. The form is responsible for
  // setting and clearing the errors, while this parent
  // component will send the errors back down to the form
  const setErrors = useCallback(() => {
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
  }, [errors]);

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
