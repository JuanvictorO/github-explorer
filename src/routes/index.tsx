import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashborad from '../pages/Dashboard';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashborad} />
  </Switch>
);

export default Routes;
