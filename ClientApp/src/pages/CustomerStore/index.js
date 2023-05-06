import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { Input, Select, Form } from 'antd';

import settings from '~/config/appsettings.json';

import history from '~/services/history';
import { getAddressByZipCodeAsync } from '~/services/viaCep';

import { strToList } from '~/utils/converterUtils';
import { mapToSelectOption } from '~/utils/componentUtils';

import FormHeader from '~/components/Form/FormHeader';

import { Wrapper, FormWarapper, FormRow } from '~/styles/form';
import RegexUtils from '~/utils/regexUtils';

const CustomerStore = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const [initialValues, setInitialValues] = useState({});
  
  const states = strToList(settings.data.states, ';', mapToSelectOption);

  const onRequiredTypeChange = ({ requiredMarkValue }) =>
    setRequiredMarkType(requiredMarkValue);

  const setAddressFieldsValues = (zipCode) => {
    if (RegexUtils.zipCode.test(zipCode)) {
      getAddressByZipCodeAsync(zipCode).then((data) => {
        const { cep, uf, bairro, logradouro, complemento, localidade } = data;
        form.setFieldsValue({
          endereco: {
            cep,
            bairro,
            logradouro,
            complemento,
            estado: uf,
            cidade: localidade
          },
        });
      });
    }
  };

  const saveData = () => {
    const data = form.getFieldValue();

    toast.success('Cliente salvo com sucesso!');
    form.resetFields();

    console.log(data);
  };

  useEffect(() => {
    setInitialValues({});
  }, []);

  return (
    <Wrapper>
      <FormHeader
        title="Cadastro de Clientes"
        saveOnClick={() => form.submit()}
        goBackOnClick={() => history.goBack()}
      />

      <FormWarapper>
        <Form
          onFinish={() => saveData()}
          onFinishFailed={() =>
            toast.error('Verique os dados e tente novamente!')
          }
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
                  type: 'string',
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
              name="documento"
              label="Documento"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  pattern: RegexUtils.cpfCnpj,
                  message: 'O documento do cliente é inválido',
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
                  type: 'string',
                  pattern: RegexUtils.whatsAppNumber,
                  message: 'O número do celular é inválido',
                },
              ]}
              name="celular"
              label="Celular"
              tooltip="Número de telefone móvel do cliente. Ex: 34 999999999"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite o número de telefone móvel do cliente..." />
            </Form.Item>

            <Form.Item
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'O e-mail é inválido',
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
                  type: 'string',
                  pattern: RegexUtils.zipCode,
                  whitespace: true,
                  message: 'O CEP é inválido',
                },
              ]}
              name={['endereco', 'cep']}
              label="CEP"
              tooltip="CEP do cliente. Ex: 38175-000"
              style={{ width: '33%' }}
            >
              <Input
                onChange={({ target }) => setAddressFieldsValues(target.value)}
                placeholder="Digite o cep do cliente..."
              />
            </Form.Item>

            <Form.Item
              name={['endereco', 'estado']}
              style={{ width: '33%' }}
              label="Estado"
              validateTrigger={['onBlur', 'onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'string',
                  message: 'O estado do cliente é obrigatório',
                },
              ]}
              tooltip="Estado do cliente"
            >
              <Select showSearch options={states} defaultValue="SP" />
            </Form.Item>

            <Form.Item
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'string',
                  message: 'A cidade do cliente é obrigatória',
                },
              ]}
              name={['endereco', 'cidade']}
              label="Cidade"
              tooltip="Cidade do cliente"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite a cidade do cliente..." />
            </Form.Item>
          </FormRow>

          <FormRow>
            <Form.Item
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  type: 'string',
                  whitespace: true,
                  message: 'O bairro do usuário é obrigatório',
                },
              ]}
              name={['endereco', 'bairro']}
              label="Bairro"
              tooltip="Bairro do cliente"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite o bairro do cliente..." />
            </Form.Item>

            <Form.Item
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'string',
                  message: 'O logradouro do cliente é obrigatório',
                },
              ]}
              name={['endereco', 'logradouro']}
              label="logradouro"
              tooltip="Logradouro do cliente"
              style={{ width: '23%' }}
            >
              <Input placeholder="Digite o logradouro do cliente..." />
            </Form.Item>

            <Form.Item
              name={['endereco', 'numero']}
              style={{ width: '10%' }}
              label="Número"
              validateTrigger={['onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'string',
                  message: 'O número da residência/comércio é obrigatório',
                },
              ]}
              tooltip="Número residencial/comercial do cliente"
            >
              <Input placeholder="Digite o número da residência/comércio..." />
            </Form.Item>

            <Form.Item
              name={['endereco', 'complemento']}
              label="Complemento"
              tooltip="O complemento de endereço do cliente"
              style={{ width: '33%' }}
            >
              <Input placeholder="Digite o complemento de endereço do cliente..." />
            </Form.Item>
          </FormRow>
        </Form>
      </FormWarapper>
    </Wrapper>
  );
};

export default CustomerStore;
