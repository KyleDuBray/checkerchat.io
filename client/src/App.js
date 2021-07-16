import React from 'react';
import './styles/base.css';

import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Game from './components/game/Game';

const App = () => {
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
