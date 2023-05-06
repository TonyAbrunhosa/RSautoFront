import React from 'react';

import { Form } from 'antd';

import VehicleForm from '~/components/Forms/VehicleForm';

const VehiclesStore = () => {
  const [formRef] = Form.useForm();

  return (
    <VehicleForm
      customers={['João Victor - 67.117.218/0001-00']}
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


export default VehiclesStore;
