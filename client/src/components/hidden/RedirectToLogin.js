import React, { useEffect } from 'react';
import history from '../../history';

const RedirectToLogin = () => {
  useEffect(() => {
    history.push('/login');
  }, []);
  return null;
};

export default RedirectToLogin;
