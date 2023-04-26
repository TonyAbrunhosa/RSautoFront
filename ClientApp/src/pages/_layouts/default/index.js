import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Layout, Menu } from 'antd';
import {
  PlusOutlined,
  SaveOutlined,
  ShoppingCartOutlined,
  CarOutlined,
  SettingFilled,
} from '@ant-design/icons';

import logo from '~/assets/images/logo.svg';

const { Content, Sider, Header } = Layout;

const siderStyles = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
};

const menuHeaderStyles = {
  height: 60,
  background: '#FFFFFF',
  paddingLeft: '12px',
  display: 'flex',
  alignItems: 'center',
  borderRight: '1px solid #7b7c90',
};

const menuStyles = {
  marginTop: '20px',
  fontSize: '16px',
  fontFamily: 'Roboto, sans-serif',
};

const contentLayoutStyles = {
  background: '#E9E8E8',
};

const headerStyles = {
  height: 60,
  backgroundColor: '#ffff',
  boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.75)',
  marginBottom: 20,
};

const headerContentStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const pageNameStyles = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 16,
  fontWeight: 'bolder',
  color: '#2e2e2e',
  fontWeight: 'normal',
};

const settingsStyles = { fontSize: 22, color: '#474747', cursor: 'pointer' };

const getItem = (label, key, subItems, icon, type) => ({
  key,
  children: subItems,
  label,
  type,
  icon,
});

const items = [
  getItem(
    'Peças',
    'pecas',
    [
      getItem('Salvas', 'pecas_salvas', null, <SaveOutlined />),
      getItem('Cadastrar', 'pecas_cadastrar', null, <PlusOutlined />),
    ],
    <SettingFilled />
  ),
  getItem(
    'Veículos',
    'veiculos',
    [
      getItem('Salvos', 'veiculos_salvos', null, <SaveOutlined />),
      getItem('Cadastrar', 'veiculos_cadastrar', null, <PlusOutlined />),
    ],
    <CarOutlined />
  ),
];

const DefaultLayout = ({ children, page }) => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={siderStyles}
        width="250"
      >
        <div style={menuHeaderStyles}>
          <Link to="/home">
            <img src={logo} alt="Rs Auto" height={collapsed ? 45 : 55} />
          </Link>
        </div>
        <Menu
          onClick={({ key: menuItem }) => {
            history.push({ pathname: menuItem.replace('_', '/') });
          }}
          style={menuStyles}
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout style={contentLayoutStyles}>
        <Header style={headerStyles}>
          <div
            style={{ ...headerContentStyles, marginLeft: collapsed ? 50 : 220 }}
          >
            <h2 style={pageNameStyles}>{page}</h2>
            <SettingFilled style={settingsStyles} />
          </div>
        </Header>
        <Content style={{ marginLeft: collapsed ? 100 : 270 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  page: PropTypes.string.isRequired,
};
