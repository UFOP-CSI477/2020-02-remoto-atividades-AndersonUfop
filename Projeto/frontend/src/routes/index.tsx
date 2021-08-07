import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';

const Routes = () => {

  return (
    <BrowserRouter>
      <Route component={Dashboard} path="/" exact />
      <Route component={Details} path="/details" />
    </BrowserRouter>
  )
}

export default Routes;