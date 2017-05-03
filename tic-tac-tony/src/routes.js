import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './App';
import Game from './pages/Game/Game';
import Score from './pages/Score/Score';
import NotFound from './pages/NotFound/NotFound'

const Routes = (props) => (
  <Router {...props}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Game} />
        <Redirect from="/game" to="/" />
        <Route path="/score" component={Score} />
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </Router>
);

export default Routes;