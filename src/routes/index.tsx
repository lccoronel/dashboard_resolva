import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../modules/app/pages/Home';
import Login from '../modules/auth/pages/Login';
import Appointments from '../modules/app/pages/Appointments';
import Look from '../modules/app/pages/Look';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/home" component={Home} isPrivate />
    <Route path="/appointments" component={Appointments} isPrivate />
    <Route path="/look" component={Look} isPrivate />
  </Switch>
);

export default Routes;
