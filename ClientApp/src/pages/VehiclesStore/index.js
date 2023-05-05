import React, { useState, useEffect } from 'react';

import { Input, Select, Form } from 'antd';

import settings from '~/config/appsettings.json';

import history from '~/services/history';

import { strToList } from '~/utils/converterUtils';
import { mapToSelectOption } from '~/utils/componentUtils';

import FormHeader from '~/components/Form/FormHeader';

import { Wrapper, FormWarapper, FormRow } from '~/styles/form';

const VehiclesStore = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const [models, setModels] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [initialValues, setInitialValues] = useState({});

  const fullTypes = strToList(settings.data.fuelTypes, ';', mapToSelectOption);
  const brands = strToList(
    settings.data.vehiclesBrands,
    ';',
    mapToSelectOption
  );

  const onRequiredTypeChange = ({ requiredMarkValue }) =>
    setRequiredMarkType(requiredMarkValue);

  const onSubmit = () => {
    console.log(form.getFieldsError());
    console.log(form.getFieldsValue());
  };

  useEffect(() => {
    setModels([]);
    setCustomers(['João Victor - 67.117.218/0001-00']);
    setInitialValues({});
  }, []);

  return (
    <Wrapper>
      <FormHeader
        title="Cadastro de Veículos"
        saveOnClick={onSubmit}
        goBackOnClick={() => history.goBack()}
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
              name="marca"
              style={{ width: '49%' }}
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
              name="modelo"
              style={{ width: '49%' }}
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
          </FormRow>

          <FormRow>
            <Form.Item
              name="tipoCombustivel"
              style={{ width: '49%' }}
              label="Tipo do combustível"
              validateTrigger={['onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'Tipo do combustível',
                },
              ]}
              tooltip="Tipo do combustível do veículo"
            >
              <Select mode="tags" options={fullTypes} defaultValue="Flex" />
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
              style={{ width: '49%' }}
            >
              <Input placeholder="Digite a cilindrada do veículo..." />{' '}
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
              style={{ width: '49%' }}
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
              style={{ width: '49%' }}
            >
              <Input placeholder="Digite a quilometragem do veículo..." />{' '}
            </Form.Item>
          </FormRow>

          <FormRow>
            <Form.Item
              name="cliente"
              label="Cliente"
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
