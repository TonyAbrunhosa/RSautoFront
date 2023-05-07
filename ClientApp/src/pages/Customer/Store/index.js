import React from 'react';

import { Form } from 'antd';

import CustomerForm from '~/components/Forms/CustomerForm';

const CustomerStore = () => {
  const [formRef] = Form.useForm();

  return (
    <CustomerForm
      boxShadow
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
