import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';
import PartsStore from '~/pages/PartsStore';
import PartsInventory from '~/pages/PartsInventory';
import SavedParts from '~/pages/SavedParts';
import SavedVehicles from '~/pages/SavedVehicles';
import VehiclesStore from '~/pages/VehiclesStore';

import Route from './Route';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" type="auth" component={SignIn} />
      <Route path="/home" type="private" component={Home} />
      <Route path="/veiculos/salvos" type="private" component={SavedVehicles} />
      <Route
        path="/veiculos/cadastrar"
        type="private"
        component={VehiclesStore}
      />
      <Route path="/pecas/salvas" type="private" component={SavedParts} />
      <Route path="/pecas/cadastrar" type="private" component={PartsStore} />
      <Route path="/pecas/estoque" type="private" component={PartsInventory} />
      <Route path="/home" type="private" component={Home} />
      <Route path="/login" type="auth" component={SignIn} />
    </Switch>
  );
};

export default Routes;
