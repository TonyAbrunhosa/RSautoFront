import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu } from 'antd';

import logo from '~/assets/images/logo.svg';
import { useHistory } from 'react-router-dom';

const { Content, Sider } = Layout;

const SiderStyles = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  background: '#5C5555',
  boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.5)',
  left: 0,
  top: 0,
  bottom: 0,
};

const RsAutoLogoStyles = {
  height: 78,
  background: '#FFFFFF',
};

const MenuStyles = {
  marginTop: '20px',
  fontSize: '20px',
  color: '#ffff',
  fontFamily: 'Roboto',
};

const ContentLayoutStyles = {
  marginLeft: 380,
  height: '100vh',
};

const getItem = (label, key, subItems, type = null) => ({
  key,
  children: subItems,
  label,
  type,
});

const items = [
  getItem('Peças', 'pecas', [
    getItem('Estoque', 'pecas_estoque'),
    getItem('Salvas', 'pecas_salvas'),
    getItem('Cadastrar', 'pecas_cadastrar'),
  ]),
  getItem('Veículos', 'veiculos', [
    getItem('Salvos', 'veiculos_salvos'),
    getItem('Cadastrar', 'veiculos_cadastrar'),
  ]),
];

const DefaultLayout = ({ children }) => {
  const history = useHistory();

  return (
    <Layout hasSider>
      <Sider width="350px" style={SiderStyles}>
        <div style={RsAutoLogoStyles}>
          <img src={logo} alt="Rs Auto" height="74" />
        </div>
        <Menu
          onClick={({ key: menuItem }) => {
            history.push(menuItem.replace('_', '/'));
          }}
          style={MenuStyles}
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout style={ContentLayoutStyles}>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
