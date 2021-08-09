import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/authActions";
import { ReactComponent as Logo } from "../icons/logo.svg";
import Button from "./Button";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogoutSubmit = () => dispatch(logout());

  const renderAuthItems = () =>
    auth.isAuthenticated ? (
      <Button handleClick={onLogoutSubmit} content="Logout" kind="logout" />
    ) : (
      <>
        <Link to="/login">
          <div className="inline-block text-sm px-4 py-2 leading-none border mr-6 border-gray-900 rounded hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            Login
          </div>
        </Link>
        <Link
          className="block mt-4 ml lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          to="/signup"
        >
          Sign Up
        </Link>
      </>
    );

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/">
          <div className="flex items-center">
            <Logo width="36px" height="36px" />
            <span className="ml-1 font-semibold text-xl tracking-tight">
              CheckerChat.io
            </span>
          </div>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/game/test"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Game
          </Link>
        </div>
        {renderAuthItems()}
      </div>
    </nav>
  );
};

export default Navbar;
