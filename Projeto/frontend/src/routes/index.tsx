import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Hotel from '../pages/Hotel';

const Routes = () => {

  return (
    <BrowserRouter>
      <Route component={Dashboard} path="/" exact />
      <Route component={Hotel} path="/hotel/:id" />
    </BrowserRouter>
  )
}

export default Routes;