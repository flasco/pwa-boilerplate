import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import Shelf from './pages/shelf';

const basepath = `${location.pathname}#`;

const routes = () => (
  <BrowserRouter basename={basepath}>
    <Switch>
      <Route path="/shelf" exact component={Shelf} />

      <Redirect from="/*" exact to="/shelf" />
    </Switch>
  </BrowserRouter>
);

export default routes;
