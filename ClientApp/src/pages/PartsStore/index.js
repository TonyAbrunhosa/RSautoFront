import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, InputNumber, Select, Switch, Form, Button } from 'antd';

import settings from '~/config/appsettings.json';

import history from '~/services/history';

import { strToList } from '~/utils/converterUtils';
import { mapToSelectOption } from '~/utils/componentUtils';
import { priceFormatterUtil } from '~/utils/formatterUtils';

import FormHeader from '~/components/Form/FormHeader';

import { Wrapper, FormWarapper, FormRow } from '~/styles/form';

const PartsStore = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const [suppliers, setSuppliers] = useState([]);
  const [initialValues, setInitialValues] = useState({});

  const brands = strToList(
    settings.data.vehiclesBrands,
    ';',
    mapToSelectOption
  );

  const onRequiredTypeChange = ({ requiredMarkValue }) =>
    setRequiredMarkType(requiredMarkValue);

  const convertData = () => {
    const data = form.getFieldsValue();

    const [descricao] = data.descricao;
    data.descricao = descricao;

    const [marca] = data.marca;
    data.marca = marca;

    const [marcaVeiculo] = data.veiculo.marca;
    data.veiculo.marca = marcaVeiculo;

    return data;
  };

  const saveData = () => {
    const data = convertData();

    toast.success('Peça salva com sucesso!');
    form.resetFields();

    console.log(data);
  };

  useEffect(() => {
    setSuppliers([]);
    setInitialValues({});
  }, []);

  return (
    <Wrapper>
      <FormHeader
        title="Cadastro de Peças"
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
              name="descricao"
              label="Descrição"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'array',
                  min: 1,
                  max: 1,
                  message: 'Informe uma descrição de peça',
                },
              ]}
              tooltip="Descrição da peça"
              style={{ width: '75%' }}
            >
              <Select
                placeholder="Selecione ou adicione a descrição da peça"
                mode="tags"
                options={[]}
              />
            </Form.Item>

            <Form.Item
              name="codigo"
              label="Código da Peça"
              style={{ width: '24%' }}
              tooltip="O código da peça"
            >
              <Input placeholder="Digite o código..." />
            </Form.Item>
          </FormRow>

          <FormRow>
            <Form.Item
              name="marca"
              style={{ width: '24%' }}
              label="Marca da peça"
              validateTrigger={['onBlur', 'onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'array',
                  min: 1,
                  max: 1,
                  message: 'Informe uma marca de peça',
                },
              ]}
              tooltip="Nome da marca da peça"
            >
              <Select
                placeholder="Selecione ou adicione a marca da peça"
                mode="tags"
                options={[]}
              />
            </Form.Item>

            <Form.Item
              name={['veiculo', 'marca']}
              style={{ width: '24%' }}
              label="Marca do Veículo"
              validateTrigger={['onBlur', 'onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'array',
                  min: 1,
                  max: 1,
                  message: 'Informe uma marca de veículo',
                },
              ]}
              tooltip="A marca do veículo a qual a peça é compatível"
            >
              <Select
                mode="tags"
                placeholder="Selecione ou adicione a marca do veículo"
                options={brands}
              />
            </Form.Item>

            <Form.Item
              name={['veiculo', 'modelos']}
              style={{ width: '24%' }}
              label="Modelo do Veículo"
              validateTrigger={['onBlur', 'onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'array',
                  min: 1,
                  message: 'Informe pelo menos um modelo de veículo',
                },
              ]}
              tooltip="Modelos do veículo a qual a peça é compatível"
            >
              <Select
                placeholder="Selecione ou adicione o modelo do veículo"
                mode="tags"
                options={[]}
              />
            </Form.Item>

            <Form.Item
              name={['veiculo', 'anos']}
              style={{ width: '24%' }}
              label="Ano/Modelo"
              validateTrigger={['onBlur', 'onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'array',
                  min: 1,
                  message: 'Informe pelo menos um ano/modelo',
                },
              ]}
              tooltip="Ano/Modelo do veículo a qual a peça é compatível"
            >
              <Select
                placeholder="Selecione ou adicione o ano/modelo do veículo"
                mode="tags"
                options={[]}
              />
            </Form.Item>
          </FormRow>

          <Form.List
            name="fornecedores"
            rules={[
              {
                validator: async (_, fornecedores) => {
                  if (!fornecedores || fornecedores.length < 1) {
                    return Promise.reject(
                      new Error('Pelo menos um fornecedor deve ser informado.')
                    );
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    label={index === 0 ? 'Fornecedores' : ''}
                    name="fornecedores"
                    required={false}
                    key={field.key}
                  >
                    <>
                      <FormRow>
                        <Form.Item
                          name={['fornecedor', 'nome']}
                          style={{ width: '80%' }}
                          validateTrigger={['onBlur', 'onChange']}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              type: 'array',
                              min: 1,
                              max: 1,
                              message: 'Informe um fornecedor',
                            },
                          ]}
                          label="Fornecedor"
                          tooltip="Nome do fornecedor da peça"
                        >
                          <Select
                            placeholder="Selecione ou adicione o fornecedor"
                            mode="tags"
                            options={suppliers}
                          />
                        </Form.Item>

                        {fields.length >= 1 && (
                          <MinusCircleOutlined
                            style={{ fontSize: '16px', color: 'red' }}
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        )}
                      </FormRow>

                      <FormRow>
                        <Form.Item
                          name={['fornecedor', 'lote']}
                          label="Lote"
                          style={{ width: '50%' }}
                          tooltip="O lote do estoque"
                        >
                          <Input placeholder="Digite o Lote..." />
                        </Form.Item>

                        <Form.Item
                          name={['fornecedor', 'estoque']}
                          label="Estoque"
                          tooltip="Quantidade de peças no estoque para este fornecedor"
                        >
                          <InputNumber defaultValue={0} min={0} />
                        </Form.Item>

                        <Form.Item
                          name={['fornecedor', 'precoUnitario']}
                          label="Preço Unitário"
                          tooltip="Preço unitário da peça para este fornecedor"
                        >
                          <InputNumber
                            defaultValue={0}
                            min={0}
                            formatter={(value) => priceFormatterUtil(value)}
                            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                          />
                        </Form.Item>

                        <Form.Item
                          name={['fornecedor', 'custoUnitario']}
                          label="Custo Unitário"
                          tooltip="Custo unitário da peça para este fornecedor"
                        >
                          <InputNumber
                            defaultValue={0}
                            min={0}
                            formatter={(value) => priceFormatterUtil(value)}
                            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                          />
                        </Form.Item>
                      </FormRow>
                    </>
                  </Form.Item>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{
                      width: '60%',
                    }}
                    icon={<PlusOutlined />}
                  >
                    Adicionar fornecedor
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>

          <FormRow>
            <Form.Item
              name="status"
              label="Ativa"
              required
              tooltip="Indica o status da peça"
            >
              <Switch defaultChecked />
            </Form.Item>
          </FormRow>
        </Form>
      </FormWarapper>
    </Wrapper>
  );
};

export default PartsStore;
