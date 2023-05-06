export const priceFormatterUtil = (value) =>
  `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const nameFormatterUtil = (value) =>
  value.replace(/(^\w{1})|(\s+\w{1})/g, (letra) => letra.toUpperCase());

export const strFormatterUtil = (value) =>
  value.normalize('NFD').replace(/[^\w\s]/gi, '');
