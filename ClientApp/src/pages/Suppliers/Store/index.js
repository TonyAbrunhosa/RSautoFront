import React from 'react';

import { Form } from 'antd';

import SupplierForm from '~/components/Forms/UserForm';

const SupplierStore = () => {
  const [formRef] = Form.useForm();

  return (
    <SupplierForm
      boxShadow
      title="Cadastro de Fornecedor"
      size={90}
      formRef={formRef}
      initialValues={undefined}
      onSaveAsync={(data) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(console.log(data));
          }, 2000);
        })
      }
    />
  );
}


export default SupplierStore;
