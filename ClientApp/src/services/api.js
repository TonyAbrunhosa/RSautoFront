/* eslint-disable no-return-assign */
/* eslint-disable no-return-await */
/* eslint-disable no-use-before-define */

import axios from 'axios';

import settings from '~/config/appsettings.json';

const api = axios.create({
  baseURL: settings.restClients.rsAutoApiBaseUrl,
});

const authenticateAsync = async (payload) =>
  await api.post('/Token/Web', payload);

const createUserAsync = async (payload) => await api.post('/User', payload);

const setAuthorizationToken = (token) =>
  (api.defaults.headers.Authorization = `Bearer ${token}`);

export { authenticateAsync, createUserAsync, setAuthorizationToken };
