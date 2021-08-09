import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import { loadUser } from './actions/authActions';

import Login from './components/auth/Login';
import Game from './components/game/Game';
import Navbar from './components/Navbar';

const App = () => {
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
            <Route exact path="/game/:id" component={Game}></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
