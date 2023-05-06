const RegexUtils = {
  zipCode: new RegExp('^([0-9]{5}(-?)[0-9]{3})$', 'i'),
  plate: new RegExp('^(([a-z]{3})(-)?([0-9]{4}))$', 'i'),
  cpfCnpj: new RegExp(
    '^([0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}|[0-9]{2}.?[0-9]{3}.?[0-9]{3}/?[0-9]{4}-?[0-9]{2})$',
    'i'
  ),
  whatsAppNumber: new RegExp('^([0-9]{2}) ?([0-9]{4,5})([0-9]{4})$', 'i'),
};

export default RegexUtils;
