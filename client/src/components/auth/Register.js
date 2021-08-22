import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register } from '../../actions/authActions';

import history from '../../history';

import RegisterForm from './RegisterForm';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from './utilities/validate';

const Register = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const auth = useSelector((state) => state.auth);

  // go to home if already authenticated
  useEffect(() => {
    if (auth.isAuthenticated && !auth.isLoading) {
      history.push('/home');
    }
  }, [auth]);

  // Dipatch register
  const onRegisterSubmit = (name, email, password) => {
    dispatch(register(name, email, password));
  };

  // Set errors for specific form fields based on
  // errors in redux store. The form is responsible for
  // setting and clearing the errors, while this parent
  // component will send the errors back down to form.
  const setErrors = useCallback(() => {
    const formErrors = {};
    errors.forEach((err) => {
      if (err.type === 'EMAIL_ERROR') {
        formErrors.email = true;
      }
      if (err.type === 'PASSWORD_ERROR') {
        formErrors.password = true;
      }
      if (err.type === 'USERNAME_ERROR') {
        formErrors.username = true;
      }
    });

    return formErrors;
  }, [errors]);

  return (
    <RegisterForm
      onSubmit={onRegisterSubmit}
      errors={setErrors()}
      validateEmail={validateEmail}
      validatePassword={validatePassword}
      validateUsername={validateUsername}
    />
  );
};

export default Register;
