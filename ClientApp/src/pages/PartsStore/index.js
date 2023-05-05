import React, { useState, useEffect } from 'react';

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

  const onSubmit = () => {
    console.log(form.getFieldValue());
  };

  useEffect(() => {
    setSuppliers([]);
    setInitialValues({});
  }, []);

  return (
    <Wrapper>
      <FormHeader
        title="Cadastro de Peças"
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
              name="descricao"
              label="Descrição"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'A descrição da peça é obrigatória',
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
              name="marcaPeca"
              style={{ width: '24%' }}
              label="Marca da peça"
              validateTrigger={['onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O nome da marca é obrigatório',
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
              validateTrigger={['onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'A marca do veículo é obrigatória',
                },
              ]}
              tooltip="A marca do veículo"
            >
              <Select
                mode="tags"
                placeholder="Selecione ou adicione a marca do veículo"
                options={brands}
              />
            </Form.Item>

            <Form.Item
              name={['veiculo', 'modelo']}
              style={{ width: '24%' }}
              label="Modelo do Veículo"
              validateTrigger={['onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O nome do modelo do veículo é obrigatório',
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
              name={['veiculo', 'ano']}
              style={{ width: '24%' }}
              label="Ano/Modelo"
              validateTrigger={['onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O ano/modelo do veículo é obrigatório',
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
                    required={false}
                    key={field.key}
                  >
                    <>
                      <FormRow>
                        <Form.Item
                          {...field}
                          name="nome"
                          style={{ width: '80%' }}
                          validateTrigger={['onChange']}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: 'O nome do fornecedor é obrigatório',
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
                          name="lote"
                          label="Lote"
                          style={{ width: '50%' }}
                          tooltip="O lote do estoque"
                        >
                          <Input placeholder="Digite o Lote..." />
                        </Form.Item>

                        <Form.Item
                          name="estoque"
                          label="Estoque"
                          tooltip="Quantidade de peças no estoque para este fornecedor"
                        >
                          <InputNumber defaultValue={0} min={0} />
                        </Form.Item>

                        <Form.Item
                          name="precoUnitario"
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
                          name="custoUnitario"
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
              <Switch />
            </Form.Item>
          </FormRow>
        </Form>
      </FormWarapper>
    </Wrapper>
  );
};

export default PartsStore;
