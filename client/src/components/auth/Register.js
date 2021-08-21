import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register } from '../../actions/authActions';
import {
  setEmailError,
  clearEmailError,
  setPasswordError,
  clearPasswordError,
  setNameError,
  clearNameError,
} from '../../actions/errorActions';
import history from '../../history';

import RegisterForm from './RegisterForm';
import { validateEmail, validatePassword } from './utilities/validate';

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

  return <RegisterForm />;
};

export default Register;
