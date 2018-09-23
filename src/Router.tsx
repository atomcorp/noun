import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import BasicPage from './pages/BasicPage';
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/basic" component={BasicPage} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);
export default Router;
