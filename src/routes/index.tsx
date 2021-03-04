import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Route from './Route';

import Home from '../modules/app/pages/Home';
import Login from '../modules/auth/pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default Routes;
