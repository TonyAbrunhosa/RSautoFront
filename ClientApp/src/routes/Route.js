import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

const PRIVATE_TYPE = 'private';
const PUBLIC_TYPE = 'public';
const AUTH_TYPE = 'auth';

const RouteWrapper = ({ component: Component, type, ...rest }) => {
  const { signed } = store.getState().auth;

  if (!signed && type === PRIVATE_TYPE) {
    return <Redirect to="/login" />;
  }

  const Layout =
    type === PUBLIC_TYPE || (type === PRIVATE_TYPE && signed)
      ? DefaultLayout
      : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

RouteWrapper.propTypes = {
  type: PropTypes.oneOf([PRIVATE_TYPE, PUBLIC_TYPE, AUTH_TYPE]).isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

export default RouteWrapper;
