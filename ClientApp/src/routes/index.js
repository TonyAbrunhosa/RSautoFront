import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';
import PartsStore from '~/pages/PartsStore';
import SavedParts from '~/pages/SavedParts';
import SavedVehicles from '~/pages/SavedVehicles';
import VehiclesStore from '~/pages/VehiclesStore';

import Route from './Route';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" type="auth" page="Login" component={SignIn} />
      <Route path="/home" type="private" page="Home" component={Home} />
      <Route
        path="/veiculos/salvos"
        type="private"
        page="Veículos > Salvos"
        component={SavedVehicles}
      />
      <Route
        path="/veiculos/cadastrar"
        type="private"
        page="Veículos > Cadastrar"
        component={VehiclesStore}
      />
      <Route
        path="/pecas/salvas"
        type="private"
        page="Peças > Salvas"
        component={SavedParts}
      />
      <Route
        path="/pecas/cadastrar"
        type="private"
        page="Peças > Cadastrar"
        component={PartsStore}
      />
      <Route path="/home" type="private" page="Home" component={Home} />
      <Route path="/login" type="auth" page="Login" component={SignIn} />
    </Switch>
  );
};

export default Routes;
