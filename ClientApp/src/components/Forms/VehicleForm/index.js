/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Input, Select, Form } from 'antd';

import settings from '~/config/appsettings.json';

import history from '~/services/history';

import { strToList } from '~/utils/converterUtils';
import { mapToSelectOption } from '~/utils/componentUtils';
import RegexUtils from '~/utils/regexUtils';

import FormHeader from '~/components/Forms/FormHeader';

import { Wrapper, FormWarapper, FormRow } from '~/styles/form';

const SUCCESS_MESSAGE = 'Veículo {1} com sucesso!';
const ERROR_MESSAGE =
  'Falha ao {1} o veículo! Caso o erro persista, contate o desenvolvedor.';

const VehicleForm = ({
  formRef,
  onSaveAsync,
  customers = [],
  size = 90,
  boxShadow = true,
  initialValues = undefined,
}) => {
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const fullTypes = strToList(settings.data.fuelTypes, ';', mapToSelectOption);
  const brands = strToList(
    settings.data.vehiclesBrands,
    ';',
    mapToSelectOption
  );

  const replaceVariables = (str, value) => str.replace('{1}', value);

  const onRequiredTypeChange = ({ requiredMarkValue }) =>
    setRequiredMarkType(requiredMarkValue);

  const convertData = () => {
    const data = formRef.getFieldsValue();

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

    onSaveAsync(data)
      .then(() => {
        toast.success(
          replaceVariables(
            SUCCESS_MESSAGE,
            !initialValues ? 'cadastrado' : 'atualizado'
          )
        );
        formRef.resetFields();
      })
      .catch(() =>
        toast.error(
          replaceVariables(
            ERROR_MESSAGE,
            !initialValues ? 'cadastrar' : 'atualizar'
          )
        )
      );
  };

  return (
    <Wrapper size={size}>
      {!initialValues && (
        <FormHeader
          title="Cadastro de Veículos"
          saveOnClick={() => formRef.submit()}
          goBackOnClick={() => history.goBack()}
        />
      )}

      <FormWarapper boxShadow={boxShadow}>
        <Form
          onFinish={() => saveData()}
          onFinishFailed={() =>
            toast.error('Verique os dados e tente novamente!')
          }
          form={formRef}
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
                options={[]}
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
                  required: true,
                  whitespace: true,
                  type: 'array',
                  min: 1,
                  max: 1,
                  message: 'Informe uma cilindrada do veículoa',
                },
              ]}
              tooltip="Cilindrada do veículo"
              style={{ width: '49%' }}
            >
              <Select
                mode="tags"
                placeholder="Selecione ou adicione a cilindrada..."
              />
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

VehicleForm.propTypes = {
  onSaveAsync: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  formRef: PropTypes.any.isRequired,
  boxShadow: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
  customers: PropTypes.array.isRequired,
};

export default VehicleForm;
