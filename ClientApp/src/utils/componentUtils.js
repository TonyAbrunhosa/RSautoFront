/* eslint-disable no-return-assign */
import { nameFormatterUtil } from './formatterUtils';

const getPropertyValue = (propertyName, record) => {
  if (propertyName.includes('.')) {
    let value = record;
    const subs = propertyName.split('.');
    subs.forEach((e) => (value = value[e]));
    return value;
  }

  return record[propertyName];
};

export const getFilters = (name, records) =>
  [...new Set(records.map((r) => getPropertyValue(name, r)))].map((r) => ({
    text: nameFormatterUtil(r),
    value: r,
  }));

export const onFilter = (value, record, property) => {
  const propertyValue = getPropertyValue(property, record).toLowerCase().trim();

  return (
    propertyValue.startsWith(value.toLowerCase().trim()) ||
    !!propertyValue.match(`/(${propertyValue})/i`)
  );
};

export const mapToSelectOption = (v) => ({ value: v, label: v });
