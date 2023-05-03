import React, { useState, useEffect } from 'react';

import { LeftOutlined, CheckOutlined } from '@ant-design/icons';

import { Input, Select, Form } from 'antd';

import FormHeader from '~/components/FormHeader';
import history from '~/services/history';

import { Wrapper, FormWarapper, FormRow } from '~/styles/form';

const VehiclesStore = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [initialValues, setInitialValues] = useState({});

  const onRequiredTypeChange = ({ requiredMarkValue }) =>
    setRequiredMarkType(requiredMarkValue);

  const onSubmit = () => {
    console.log(form.getFieldsError());
    console.log(form.getFieldsValue());
  };

  useEffect(() => {
    setBrands([
      { value: 'Volkswagen', label: 'Volkswagen' },
      { value: 'Toyota', label: 'Toyota' },
      { value: 'Hyundai', label: 'Hyundai' },
      { value: 'Nissan', label: 'Nissan' },
      { value: 'Ford', label: 'Ford' },
      { value: 'Kia', label: 'Kia' },
      { value: 'Renault', label: 'Renault' },
      { value: 'Citroën', label: 'Citroën' },
    ]);
    setModels([]);
    setCustomers(['João Victor - 67.117.218/0001-00']);
    setInitialValues({});
    setFetching(false);
  }, []);

  return (
    <Wrapper>
      <FormHeader
        title="Cadastro de Veículos"
        buttons={[
          {
            name: 'Voltar',
            type: 'dashed',
            size: 'large',
            onClick: () => history.goBack(),
            icon: <LeftOutlined />,
          },
          {
            name: 'Salvar',
            type: 'primary',
            size: 'large',
            onClick: onSubmit,
            disabled: false,
            icon: <CheckOutlined />,
          },
        ]}
      />

      <FormWarapper>
        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <FormRow>
            <Form.Item
              name="description"
              label="Descrição"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'A descrição do veículo é obrigatória',
                },
              ]}
              tooltip="Descrição do veículo"
              style={{ width: '100%' }}
            >
              <Input placeholder="Digite a descrição do veículo..." />{' '}
            </Form.Item>
          </FormRow>

          <FormRow>
            <Form.Item
              name="brand"
              style={{ width: '33%' }}
              label="Marca"
              validateTrigger={['onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O nome da marca é obrigatório',
                },
              ]}
              tooltip="Nome da marca do veículo"
            >
              <Select mode="tags" options={brands} />
            </Form.Item>

            <Form.Item
              name="model"
              style={{ width: '33%' }}
              label="Modelo"
              validateTrigger={['onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O nome do modelo é obrigatório',
                },
              ]}
              tooltip="Nome do modelo do veículo"
            >
              <Select mode="tags" options={models} />
            </Form.Item>

            <Form.Item
              name="anoModelo"
              style={{ width: '33%' }}
              label="Ano/Modelo"
              validateTrigger={['onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O ano/modelo do veículo é obrigatório',
                },
              ]}
              tooltip="Ano/Modelo do veículo"
            >
              <Select mode="tags" options={[]} />
            </Form.Item>
          </FormRow>

          <FormRow>
            <Form.Item
              name="placa"
              label="Placa"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O número da placa do veículo é obrigatório',
                },
              ]}
              tooltip="O número da placa do veículo"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite o número da placa..." />{' '}
            </Form.Item>
            <Form.Item
              name="km"
              label="Quilometragem"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'A quilometragem do veículo é obrigatória',
                },
              ]}
              tooltip="Quilometragem do veículo"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite a quilometragem do veículo..." />{' '}
            </Form.Item>
            <Form.Item
              name="cilindrada"
              label="Cilindrada"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'A cilindrada do veículo é obrigatória',
                },
              ]}
              tooltip="Cilindrada do veículo"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite a cilindrada do veículo..." />{' '}
            </Form.Item>
          </FormRow>
          <FormRow>
            <Form.Item
              name="Cliente"
              label="cliente"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O cliente é obrigatório',
                },
              ]}
              tooltip="Dono do veículo"
              style={{ width: '50%' }}
            >
              <Select
                mode="multiple"
                placeholder="Selecione o cliente"
                value={[]}
                onChange={() => {}}
                options={customers.map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </Form.Item>
          </FormRow>
        </Form>
      </FormWarapper>
    </Wrapper>
  );
};

export default VehiclesStore;
