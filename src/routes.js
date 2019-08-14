// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './constants/menu';
import PageNotFound from './components/views/404';

import App from './App';

const AppRoutes = () => 
<App>
  <Switch>
    {
      Menu && Menu.map( (element) => (
        <Route 
          exact 
          path={element.path} 
          component={element.component} 
          key={element.title + 1} 
        />
      ))
    }
    <Route component={PageNotFound} />
  </Switch>
</App>

export default AppRoutes;
