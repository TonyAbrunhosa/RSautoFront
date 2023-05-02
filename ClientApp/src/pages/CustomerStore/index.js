import React, { useState, useEffect } from 'react';

import { LeftOutlined, CheckOutlined } from '@ant-design/icons';

import { Input, Select, Switch, Form } from 'antd';

import FormHeader from '~/components/FormHeader';
import history from '~/services/history';

import { Wrapper, FormWarapper, FormRow } from './styles';

const CustomerStore = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const [initialValues, setInitialValues] = useState({});
  const [states, setStates] = useState([]);

  const onRequiredTypeChange = ({ requiredMarkValue }) =>
    setRequiredMarkType(requiredMarkValue);

  const onSubmit = () => {
    console.log(form.getFieldsError());
    console.log(form.getFieldsValue());
  };

  useEffect(() => {
    setStates(
      [
        { value: 'AM', label: 'AM' },
        { value: 'MG', label: 'MG' },
        { value: 'SP', label: 'SP' },
        { value: 'RJ', label: 'RJ' },
        { value: 'RO', label: 'RO' },
      ].sort()
    );
    setInitialValues({});
  }, []);

  return (
    <Wrapper>
      <FormHeader
        title="Cadastro de Clientes"
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
              name="nome"
              label="Nome"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O nome do cliente é obrigatório',
                },
              ]}
              tooltip="Nome do cliente"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite o nome do cliente..." />
            </Form.Item>
            <Form.Item
              name="razaoSocial"
              label="Razão Social"
              tooltip="Razão social do cliente"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite a razão social do cliente..." />
            </Form.Item>
            <Form.Item
              name="cpfcnpj"
              label="Documento"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O documento do cliente é obrigatório',
                },
              ]}
              tooltip="CPF ou CNPJ do cliente"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite o documento do cliente..." />
            </Form.Item>
          </FormRow>

          <FormRow>
            <Form.Item
              name="telefone"
              label="Telefone"
              tooltip="Telefone fixo do cliente"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite o número do telefone fixo do cliente..." />
            </Form.Item>
            <Form.Item
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O número do celular do cliente é obrigatório',
                },
              ]}
              name="celular"
              label="Celular"
              tooltip="Número de telefone móvel do cliente"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite o número de telefone móvel do cliente..." />
            </Form.Item>
            <Form.Item
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O e-mail do cliente é obrigatório',
                },
              ]}
              name="email"
              label="E-mail"
              tooltip="E-mail do cliente"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite o e-mail do cliente..." />
            </Form.Item>
          </FormRow>

          <FormRow>
            <Form.Item
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O CEP do cliente é obrigatório',
                },
              ]}
              name="cep"
              label="CEP"
              tooltip="CEP do cliente"
              style={{ width: '10%' }}
            >
              <Input placeholder="Digite o cep do cliente..." />
            </Form.Item>
            <Form.Item
              name="estado"
              style={{ width: '10%' }}
              label="Estado"
              validateTrigger={['onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O estado do cliente é obrigatório',
                },
              ]}
              tooltip="Estado do cliente"
            >
              <Select mode="tags" options={states} />
            </Form.Item>
            <Form.Item
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'A cidade do cliente é obrigatória',
                },
              ]}
              name="cidade"
              label="Cidade"
              tooltip="Cidade do cliente"
              style={{ width: '20%' }}
            >
              <Input placeholder="Digite a cidade do cliente..." />
            </Form.Item>
            <Form.Item
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O endereço do cliente é obrigatório',
                },
              ]}
              name="endereco"
              label="Endereço"
              tooltip="Endereço do cliente com logradouro e número"
              style={{ width: '29%' }}
            >
              <Input placeholder="Digite o endereço do cliente..." />
            </Form.Item>
            <Form.Item
              name="complemento"
              label="Complemento"
              tooltip="O complemento de endereço do cliente"
              style={{ width: '29%' }}
            >
              <Input placeholder="Digite o complemento de endereço do cliente..." />
            </Form.Item>
          </FormRow>

          <FormRow>
            <Form.Item
              name="enabled"
              label="Ativo"
              required
              tooltip="Indica o status da cliente"
            >
              <Switch />
            </Form.Item>
          </FormRow>
        </Form>
      </FormWarapper>
    </Wrapper>
  );
};

export default CustomerStore;
