import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import pt_BR from 'antd/es/locale/pt_BR';

import App from './App';

ReactDOM.render(
  <ConfigProvider locale={pt_BR}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
