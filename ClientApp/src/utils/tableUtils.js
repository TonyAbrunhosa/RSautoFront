import { nameFormatterUtil } from './formatterUtils';

const getFilters = (name, records) =>
  [...new Set(records.map((r) => r[name]))].map((r) => ({
    text: nameFormatterUtil(r),
    value: r,
  }));

export { getFilters };
