import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import { loadUser } from './actions/authActions';

import Login from './components/auth/Login';
import Game from './components/game/Game';
import Navbar from './components/Navbar';
import RedirectToLogin from './components/hidden/RedirectToLogin';
import Register from './components/auth/Register';

const App = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

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
              component={auth.isAuthenticated ? Game : RedirectToLogin}
            ></Route>

            <Route exact path="/signup" component={Register}></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
