export const priceFormatterUtil = (value) =>
`R$ ${value}`.replace(
  /\B(?=(\d{3})+(?!\d))/g,
  ','
)