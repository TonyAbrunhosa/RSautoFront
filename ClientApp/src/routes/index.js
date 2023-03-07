import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';
import Route from './Route';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" type="auth" component={SignIn} />
      <Route path="/home" type="private" component={Home} />
      <Route path="/login" type="auth" component={SignIn} />
    </Switch>
  );
};

export default Routes;
