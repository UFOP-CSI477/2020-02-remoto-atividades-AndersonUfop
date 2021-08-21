import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Hotel from '../pages/Hotel';
import Apartments from '../pages/Apartments';
import Login from '../pages/Login';
import NewUser from '../pages/NewUser';
import Reserve from '../pages/Reserve';
import AdminArea from '../pages/AdminArea';
import NewHotel from '../pages/AdminArea/NewHotel';
import AdminAreaApartments from '../pages/AdminArea/AdminAreaApartments';
import NewApartment from '../pages/AdminArea/AdminAreaApartments/NewApartment';

const Routes: React.FC = () => (
  <Switch>
    <Route component={Login} path="/login" exact />
    <Route component={NewUser} path="/new-user" exact />

    <Route component={Hotel} path="/hotel/:id" isPrivate />
    <Route
      component={Reserve}
      path="/apartments/reserve/:apartment_id"
      exact
      isPrivate
    />
    <Route
      component={Apartments}
      path="/apartments/:hotel_id"
      exact
      isPrivate
    />

    <Route component={AdminArea} path="/admin" exact isPrivate />
    <Route component={NewHotel} path="/admin/hotels/new" exact isPrivate />
    <Route
      component={AdminAreaApartments}
      path="/admin/apartments"
      exact
      isPrivate
    />
    <Route
      component={NewApartment}
      path="/admin/apartments/new"
      exact
      isPrivate
    />

    <Route component={Dashboard} path="/" exact isPrivate />
  </Switch>
);

export default Routes;
