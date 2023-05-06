import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import { Input, Select, Form } from 'antd';

import settings from '~/config/appsettings.json';

import history from '~/services/history';

import { strToList } from '~/utils/converterUtils';
import { mapToSelectOption } from '~/utils/componentUtils';

import FormHeader from '~/components/Form/FormHeader';

import { Wrapper, FormWarapper, FormRow } from '~/styles/form';
import RegexUtils from '~/utils/regexUtils';

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

  const convertData = () => {
    const data = form.getFieldsValue();

    const [modelo] = data.modelo;
    data.modelo = modelo;

    const [marca] = data.marca;
    data.marca = marca;

    const [anoModelo] = data.anoModelo;
    data.anoModelo = anoModelo;

    const [tipoCombustivel] = data.tipoCombustivel;
    data.tipoCombustivel = tipoCombustivel;

    return data;
  };

  const saveData = () => {
    const data = convertData();

    toast.success('Veículo salvo com sucesso!');
    form.resetFields();

    console.log(data);
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
        saveOnClick={() => form.submit()}
        goBackOnClick={() => history.goBack()}
      />

      <FormWarapper>
        <Form
          form={form}
          onFinish={() => saveData()}
          onFinishFailed={() =>
            toast.error('Verique os dados e tente novamente!')
          }
          layout="vertical"
          initialValues={initialValues}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <FormRow>
            <Form.Item
              name="marca"
              style={{ width: '33%' }}
              label="Marca"
              validateTrigger={['onBlur', 'onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'array',
                  min: 1,
                  max: 1,
                  message: 'Informe uma marca',
                },
              ]}
              tooltip="Nome da marca do veículo"
            >
              <Select
                placeholder="Selecione ou adicione a marca do veículo"
                mode="tags"
                options={brands}
              />
            </Form.Item>

            <Form.Item
              name="modelo"
              style={{ width: '33%' }}
              label="Modelo"
              validateTrigger={['onBlur', 'onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'array',
                  min: 1,
                  max: 1,
                  message: 'Informe um modelo',
                },
              ]}
              tooltip="Nome do modelo do veículo"
            >
              <Select
                placeholder="Selecione ou adicione o modelo do veículo"
                mode="tags"
                options={models}
              />
            </Form.Item>

            <Form.Item
              name="anoModelo"
              style={{ width: '33%' }}
              label="Ano/Modelo"
              validateTrigger={['onBlur', 'onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'array',
                  min: 1,
                  max: 1,
                  message: 'Informe um ano/modelo',
                },
              ]}
              tooltip="Ano/Modelo do veículo"
            >
              <Select
                mode="tags"
                placeholder="Selecione ou adicione o ano/modelo"
                options={[]}
              />
            </Form.Item>
          </FormRow>

          <FormRow>
            <Form.Item
              name="tipoCombustivel"
              style={{ width: '49%' }}
              label="Tipo do combustível"
              validateTrigger={['onBlur', 'onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'array',
                  min: 1,
                  max: 1,
                  message: 'Informe um tipo de combustível',
                },
              ]}
              tooltip="Tipo do combustível do veículo"
            >
              <Select
                placeholder="Selecione ou adicione o tipo do combustível"
                mode="tags"
                options={fullTypes}
              />
            </Form.Item>

            <Form.Item
              name="cilindrada"
              label="Cilindrada"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  type: 'string',
                  required: true,
                  whitespace: true,
                  message: 'A cilindrada do veículo é obrigatória',
                },
              ]}
              tooltip="Cilindrada do veículo"
              style={{ width: '49%' }}
            >
              <Input placeholder="Digite a cilindrada do veículo..." />
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
                  type: 'string',
                  pattern: RegexUtils.plate,
                  message: 'A placa é inválida',
                },
              ]}
              tooltip="A placa do veículo. Ex: JYQ-6145"
              style={{ width: '49%' }}
            >
              <Input placeholder="Digite o número da placa..." />
            </Form.Item>

            <Form.Item
              name="quilometragem"
              label="Quilometragem"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'string',
                  message: 'A quilometragem do veículo é obrigatória',
                },
              ]}
              tooltip="Quilometragem do veículo"
              style={{ width: '49%' }}
            >
              <Input placeholder="Digite a quilometragem do veículo..." />
            </Form.Item>
          </FormRow>

          <FormRow>
            <Form.Item
              name="cliente"
              label="Cliente"
              validateTrigger={['onBlur', 'onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'string',
                  message: 'Informe um cliente',
                },
              ]}
              tooltip="Dono do veículo"
              style={{ width: '50%' }}
            >
              <Select
                showSearch
                placeholder="Selecione o cliente"
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
