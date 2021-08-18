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

  //
  const onLoginSubmit = (email, password) => {
    dispatch(login({ email, password }));
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log();
    if (!re.test(String(email).toLowerCase())) {
      dispatch(setEmailError());
    } else {
      dispatch(clearEmailError());
    }
  };

  const validatePassword = (password) => {
    console.log(password.length);
    if (password.length < 6) {
      console.log(`password short. Error`);
      dispatch(setPasswordError());
    } else {
      console.log(`password sufficient`);
      dispatch(clearPasswordError());
    }
  };

  return (
    <LoginForm
      onSubmit={onLoginSubmit}
      errors={errors}
      validateEmail={validateEmail}
      validatePassword={validatePassword}
    />
  );
};

export default Login;
