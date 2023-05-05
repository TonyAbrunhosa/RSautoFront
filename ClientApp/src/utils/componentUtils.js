import { nameFormatterUtil } from './formatterUtils';

export const getFilters = (name, records) =>
  [...new Set(records.map((r) => r[name]))].map((r) => ({
    text: nameFormatterUtil(r),
    value: r,
  }));

export const onFilter = (value, record, property) => {
  const propertyValue = record[property].toLowerCase().trim();
  
  return (
    propertyValue.startsWith(value.toLowerCase().trim()) ||
    !!propertyValue.match(`/(${propertyValue})/i`)
  );
};

export const mapToSelectOption = (v) => ({ value: v, label: v });
