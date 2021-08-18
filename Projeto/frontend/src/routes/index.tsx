import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Hotel from '../pages/Hotel';
import Login from '../pages/Login';
import NewUser from '../pages/NewUser';

const Routes: React.FC = () => (
  <Switch>
    <Route component={Login} path="/login" exact />
    <Route component={NewUser} path="/new-user" exact />

    <Route component={Hotel} path="/hotel/:id" isPrivate />
    <Route component={Dashboard} path="/dashboard" isPrivate />
  </Switch>
);

export default Routes;
