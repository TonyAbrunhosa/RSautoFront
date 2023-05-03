import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';
import PartsStore from '~/pages/PartsStore';
import SavedParts from '~/pages/SavedParts';
import SavedVehicles from '~/pages/SavedVehicles';
import VehiclesStore from '~/pages/VehiclesStore';
import CustomerStore from '~/pages/CustomerStore';
import SavedCustomers from '~/pages/SavedCustomers';

import Route from './Route';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" type="auth" page="Login" component={SignIn} />
      <Route path="/home" type="private" page="Home" component={Home} />
      <Route
        path="/veiculos"
        type="private"
        page="Veículos > Salvos"
        component={SavedVehicles}
      />
      <Route
        path="/cadastrar-veiculo"
        type="private"
        page="Veículos > Cadastrar"
        component={VehiclesStore}
      />
      <Route
        path="/pecas"
        type="private"
        page="Peças > Salvas"
        component={SavedParts}
      />
      <Route
        path="/cadastrar-peca"
        type="private"
        page="Peças > Cadastrar"
        component={PartsStore}
      />
      <Route
        path="/clientes"
        type="private"
        page="Clientes > Salvos"
        component={SavedCustomers}
      />
      <Route
        path="/cadastrar-cliente"
        type="private"
        page="Clientes > Cadastrar"
        component={CustomerStore}
      />
      <Route path="/home" type="private" page="Home" component={Home} />
      <Route path="/login" type="auth" page="Login" component={SignIn} />
    </Switch>
  );
};

export default Routes;
