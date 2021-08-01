import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import { loadUser } from './actions/authActions';

import Game from './components/game/Game';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/game/:id" component={Game}></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
