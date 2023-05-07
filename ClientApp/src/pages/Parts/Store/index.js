import React from 'react';

import { Form } from 'antd';

import PartForm from '~/components/Forms/PartForm';

const PartsStore = () => {
  const [formRef] = Form.useForm();

  return (
    <PartForm
      suppliers={[]}
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


export default PartsStore;
