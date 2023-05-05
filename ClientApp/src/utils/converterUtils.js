export const strToList = (str, separator, converterFunc) =>
  str
    .split(separator)
    .sort()
    .map((s) => converterFunc(s));
