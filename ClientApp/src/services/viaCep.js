/* eslint-disable no-return-assign */
/* eslint-disable no-return-await */
/* eslint-disable no-use-before-define */

import axios from 'axios';

import { strFormatterUtil } from '~/utils/formatterUtils';

import settings from '~/config/appsettings.json';

const api = axios.create({
  baseURL: settings.restClients.viaCepApiBaseUrl,
});

export const getAddressByZipCodeAsync = async (cep) =>
  (await api.get(`/${strFormatterUtil(cep)}/json`)).data;
