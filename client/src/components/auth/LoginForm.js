import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {
  clearEmailError,
  setEmailError,
  clearPasswordError,
  setPasswordError,
} from '../../actions/errorActions';

const LoginForm = ({ onSubmit, validateEmail, validatePassword, errors }) => {
  const emailRef = useRef();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    emailRef.current.focus();

    // clear all form errors on component unmount
    return () => {
      dispatch(clearEmailError());
      dispatch(clearPasswordError());
    };
  }, []);

  const onLoginSubmit = () => {
    onSubmit(email, password);
    setEmail('');
    setPassword('');
  };

  // ONCHANGE
  const onEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailTouched) {
      if (validateEmail(e.target.value)) {
        dispatch(clearEmailError());
      } else {
        dispatch(setEmailError());
      }
    }
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordTouched) {
      if (validatePassword(e.target.value)) {
        dispatch(clearPasswordError());
      } else {
        dispatch(setPasswordError());
      }
    }
  };

  // BLUR VALIDATION
  const [emailTouched, setEmailTouched] = useState(false);
  const onEmailBlur = () => {
    if (validateEmail(email)) {
      dispatch(clearEmailError());
    } else dispatch(setEmailError());
    setEmailTouched(true);
  };

  const [passwordTouched, setPasswordTouched] = useState(false);
  const onPasswordBlur = () => {
    if (validatePassword(password)) {
      dispatch(clearPasswordError());
    } else dispatch(setPasswordError());
    setPasswordTouched(true);
  };

  // ERROR STYLES

  const emailErrorStyles = useMemo(() => {
    if (errors.email) {
      return (
        <p className="text-red-500 text-xs italic">
          Please enter a valid email.
        </p>
      );
    }
    return null;
  }, [errors]);

  const passwordErrorStyles = useMemo(() => {
    if (errors.password) {
      return (
        <p className="text-red-500 text-xs italic">
          Please enter a valid password.
        </p>
      );
    }
    return null;
  }, [errors]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-32"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border ${
                errors.email ? 'border-red-500' : null
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="text"
              placeholder="email"
              onChange={onEmailChange}
              value={email}
              ref={emailRef}
              onBlur={onEmailBlur}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border ${
                errors.password ? 'border-red-500' : null
              } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              placeholder="******************"
              onChange={onPasswordChange}
              value={password}
              onKeyPress={(e) => {
                if (e.key === 'Enter') onLoginSubmit();
              }}
              onBlur={onPasswordBlur}
            />
            {emailErrorStyles}
            {passwordErrorStyles}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 focus:shadow-outline"
              type="button"
              onClick={onLoginSubmit}
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;Kyle DuBray. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
