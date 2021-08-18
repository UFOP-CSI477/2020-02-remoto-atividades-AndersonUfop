import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Hotel from '../pages/Hotel';
import Login from '../pages/Login';
import NewUser from '../pages/NewUser';

const Routes = () => {

  return (
    <BrowserRouter>
      <Route component={Dashboard} path="/" exact />
      <Route component={Login} path="/login" exact />
      <Route component={NewUser} path="/new-user" exact />
      <Route component={Hotel} path="/hotel/:id" />
    </BrowserRouter>
  )
}

export default Routes;