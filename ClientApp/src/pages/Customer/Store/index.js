import React from 'react';

import { Form } from 'antd';

import CustomerForm from '~/components/Forms/UserForm';

const CustomerStore = () => {
  const [formRef] = Form.useForm();

  return (
    <CustomerForm
      boxShadow
      title="Cadastro de Cliente"
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


export default CustomerStore;
