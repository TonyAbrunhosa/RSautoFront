import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';
import PartsStore from '~/pages/Parts/Store';
import SavedParts from '~/pages/Parts/List';
import SavedVehicles from '~/pages/Vehicles/List';
import VehiclesStore from '~/pages/Vehicles/Store';
import CustomerStore from '~/pages/Customer/Store';
import SavedCustomers from '~/pages/Customer/List';
import SavedServiceOrders from '~/pages/ServiceOrder/List';
import Suppliers from '~/pages/Suppliers';
import Metrics from '~/pages/Metrics';
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
      <Route
        path="/ordens"
        type="private"
        page="Ordens de Serviço > Cadastradas"
        component={SavedServiceOrders}
      />
      <Route
        path="/metricas"
        type="private"
        page="Métricas"
        component={Metrics}
      />
      <Route
        path="/fornecedores"
        type="private"
        page="Fornecedores"
        component={Suppliers}
      />
      <Route path="/home" type="private" page="Home" component={Home} />
      <Route path="/login" type="auth" page="Login" component={SignIn} />
    </Switch>
  );
};

export default Routes;
