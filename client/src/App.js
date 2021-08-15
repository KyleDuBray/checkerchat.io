import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import { loadUser } from './actions/authActions';

import Login from './components/auth/Login';
import Game from './components/game/Game';
import Navbar from './components/Navbar';
import RedirectToLogin from './components/hidden/RedirectToLogin';

const App = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const renderVerifiedComponent = (component) =>
    auth.isValidated ? component : <RedirectToLogin />;

  return (
    <>
      <Router history={history}>
        <div className="h-screen">
          <Navbar />
          <Switch>
            <Route exact path="/login" component={Login}></Route>

            <Route
              exact
              path="/game/:id"
              component={auth.isValidated ? Game : RedirectToLogin}
            ></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
