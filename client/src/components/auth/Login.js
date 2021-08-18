import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/authActions';
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

  const onLoginSubmit = (email, password) => {
    console.log('logging in');
    dispatch(login({ email, password }));
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()));
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      console.log('Please enter a valid password');
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
