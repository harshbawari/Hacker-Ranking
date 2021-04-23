import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './screens/HomePage';
import HackerInfo from './screens/HackerInfo';
import Leaderboard from './screens/Leaderboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/hackers'>
          <HackerInfo />
        </Route>
        <Route exact path='/leaderboard'>
          <Leaderboard />
        </Route>
      </Switch>
      <Route exact path='/'>
          <HomePage />
        </Route>
    </Router>
  );
}

export default App;
