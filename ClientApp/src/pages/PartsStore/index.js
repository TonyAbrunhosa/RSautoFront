import React, { useState, useEffect } from 'react';

import {
  LeftOutlined,
  CheckOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import { Input, InputNumber, Select, Switch, Form, Button } from 'antd';

import { priceFormatterUtil } from '~/utils/formatterUtils';
import FormHeader from '~/components/FormHeader';
import history from '~/services/history'; 

import { Wrapper, FormWarapper, FormRow } from './styles';

const PartsStore = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
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
    setSuppliers([]);
    setInitialValues({});
  }, []);

  return (
    <Wrapper>
      <FormHeader
        title="Cadastro de Peças"
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
                  message: 'A descrição da peça é obrigatória',
                },
              ]}
              tooltip="Descrição da peça"
              style={{ width: '100%' }}
            >
              <Input placeholder="Digite a descrição da peça..." />{' '}
            </Form.Item>
          </FormRow>

          <FormRow>
            <Form.Item
              name="brand"
              style={{ width: '33%' }}
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
              <Select mode="tags" options={brands} />
            </Form.Item>

            <Form.Item
              name="model"
              style={{ width: '33%' }}
              label="Modelo da Peça"
              validateTrigger={['onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'O nome do modelo é obrigatório',
                },
              ]}
              tooltip="Nome do modelo da peça"
            >
              <Select mode="tags" options={models} />
            </Form.Item>

            <Form.Item
              name="vehicleModel"
              style={{ width: '33%' }}
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
              <Select mode="tags" options={models} />
            </Form.Item>
          </FormRow>

          <Form.List
            name="suppliersList"
            rules={[
              {
                validator: async (_, suppliersList) => {
                  if (!suppliersList || suppliersList.length < 1) {
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
                          name="supplierName"
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
                          <Select mode="tags" options={suppliers} />
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
                          name="stockBatch"
                          label="Lote"
                          style={{ width: '50%' }}
                          tooltip="O lote do estoque"
                        >
                          <Input placeholder="Digite o Lote..." />
                        </Form.Item>

                        <Form.Item
                          name="stock"
                          label="Estoque"
                          tooltip="Quantidade de peças no estoque para este fornecedor"
                        >
                          <InputNumber defaultValue={0} min={0} />
                        </Form.Item>

                        <Form.Item
                          name="unitPrice"
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
                          name="unitCost"
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
              name="enabled"
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
