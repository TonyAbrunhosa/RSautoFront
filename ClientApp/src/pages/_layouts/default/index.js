import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Layout, Menu } from 'antd';
import {
  CarOutlined,
  SettingFilled,
  UserOutlined,
  FormOutlined,
  HomeOutlined,
  LineChartOutlined,
  ImportOutlined,
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
  alignMenuItems: 'center',
  borderRight: '1px solid #7b7c90',
};

const menuStyles = {
  marginTop: '20px',
  fontSize: '14px',
  fontWeight: 'regular',
  fontFamily: 'Roboto, sans-serif',
};

const contentLayoutStyles = {
  background: '#e6e6e6',
};

const headerStyles = {
  height: 60,
  backgroundColor: '#ffff',
  boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.75)',
  marginBottom: 20,
};

const headerContentStyles = {
  display: 'flex',
  alignMenuItems: 'center',
  justifyContent: 'space-between',
};

const pageNameStyles = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 16,
  fontWeight: 'bolder',
  color: '#2e2e2e',
};

const getItem = (label, key, subMenuItems, icon, type) => ({
  key,
  subMenuItems,
  label,
  type,
  icon,
});

const MenuItems = [
  getItem('Home', 'home', [], <HomeOutlined />),
  getItem('Métricas', 'metricas', [], <LineChartOutlined />),
  getItem('Ordens De Serviço', 'ordens', [], <FormOutlined />),
  getItem('Peças', 'pecas', [], <SettingFilled />),
  getItem('Veículos', 'veiculos', [], <CarOutlined />),
  getItem('Fornecedores', 'fornecedores', [], <ImportOutlined />),
  getItem('Clientes', 'clientes', [], <UserOutlined />),
];

const getMenuItemComponent = (key, label, icon) => (
  <Menu.Item key={key} icon={icon}>
    <Link to={key.replaceAll('_', '-')}>{label}</Link>
  </Menu.Item>
);

const DefaultLayout = ({ children, page }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout hasSider>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={siderStyles}
          width="220"
        >
          <div style={menuHeaderStyles}>
            <Link to="/home">
              <img src={logo} alt="Rs Auto" height={collapsed ? 45 : 55} />
            </Link>
          </div>
          <Menu
            style={menuStyles}
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
          >
            {MenuItems.map((i) =>
              !i.subMenuItems.length ? (
                getMenuItemComponent(i.key, i.label, i.icon)
              ) : (
                <Menu.SubMenu key={i.key} title={i.label} icon={i.icon}>
                  {i.subMenuItems.map((subI) =>
                    getMenuItemComponent(subI.key, subI.label, subI.icon)
                  )}
                </Menu.SubMenu>
              )
            )}
          </Menu>
        </Sider>
        <Layout style={contentLayoutStyles}>
          <Header style={headerStyles}>
            <div
              style={{
                ...headerContentStyles,
                marginLeft: collapsed ? 50 : 220,
              }}
            >
              <h2 style={pageNameStyles}>{page}</h2>
            </div>
          </Header>
          <Content style={{ marginLeft: collapsed ? 100 : 220 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  page: PropTypes.string.isRequired,
};
