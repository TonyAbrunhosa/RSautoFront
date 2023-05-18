/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { InputNumber, Input, Select, Form, Button, Statistic } from 'antd';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { Wrapper, FormWarapper, FormRow } from '~/styles/form';

import history from '~/services/history';

import { priceFormatterUtil } from '~/utils/formatterUtils';
import FormHeader from '../FormHeader';

const { TextArea } = Input;

const SUCCESS_MESSAGE = 'Cliente {1} com sucesso!';
const ERROR_MESSAGE =
  'Falha ao {1} o Cliente! Caso o erro persista, contate o desenvolvedor.';

const ServiceOrderForm = ({
  formRef,
  onSaveAsync,
  size = 90,
  boxShadow = true,
  initialValues = undefined,
  customers = [],
}) => {
  const [requiredMark, setRequiredMarkType] = useState('');
  const [hasCustomer, setHasCustomer] = useState(false);
  const [hasVehicle, setHasVehicle] = useState(false);
  const [total, setTotal] = useState(0);

  const replaceVariables = (str, value) => str.replace('{1}', value);

  const onRequiredTypeChange = ({ requiredMarkValue }) =>
    setRequiredMarkType(requiredMarkValue);

  const saveData = () => {
    const data = formRef.getFieldValue();

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
          title="Cadastro de Clientes"
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
              style={{ width: '49%' }}
            >
              <Select
                showSearch
                onSelect={() => setHasCustomer(true)}
                onDeselect={() => setHasCustomer(false)}
                placeholder="Selecione o cliente"
                options={customers.map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </Form.Item>
            <Form.Item
              name="veiculo"
              label="Veículo"
              onSelect={() => setHasVehicle(true)}
              onDeselect={() => setHasVehicle(false)}
              validateTrigger={['onBlur', 'onChange']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  type: 'string',
                  message: 'Informe o veículo',
                },
              ]}
              tooltip="Veículo do cliente"
              style={{ width: '49%' }}
            >
              <Select
                disabled={!hasCustomer}
                showSearch
                placeholder="Selecione o veículo"
                options={[]}
              />
            </Form.Item>
          </FormRow>

          <Form.List
            name="pecas"
            rules={[
              {
                validator: async (_, fornecedores) => {
                  if (!fornecedores || fornecedores.length < 1) {
                    return Promise.reject(
                      new Error('Pelo menos uma peça deve ser informada.')
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
                    label={index === 0 ? 'Peças' : ''}
                    name="pecas"
                    required={false}
                    key={field.key}
                  >
                    <>
                      <FormRow>
                        <Form.Item
                          name={['peca', 'descricao']}
                          style={{ width: '60%' }}
                          validateTrigger={['onBlur', 'onChange']}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              type: 'array',
                              min: 1,
                              max: 1,
                              message: 'Informe uma peça',
                            },
                          ]}
                          label="Peça"
                          tooltip="Descrição da peça"
                        >
                          <Select
                            showSearch
                            placeholder="Seleciona a peça"
                            options={[]}
                          />
                        </Form.Item>
                        <Form.Item
                          validateTrigger={['onBlur', 'onChange']}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              type: 'number',
                              min: 1,
                              max: 1,
                              message: 'Informe a quantidade de peças',
                            },
                          ]}
                          name={['peca', 'quantidade']}
                          label="Quantidade"
                          tooltip="Quantidade de peças"
                        >
                          <InputNumber defaultValue={1} min={1} />
                        </Form.Item>

                        <Form.Item
                          name={['peca', 'precoUnitario']}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              type: 'number',
                              min: 1,
                              max: 1,
                              message: 'Informe o preço da peça',
                            },
                          ]}
                          label="Preço Unitário"
                          tooltip="Preço unitário da peça"
                        >
                          <InputNumber
                            defaultValue={0}
                            min={0}
                            formatter={(value) => priceFormatterUtil(value)}
                            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
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
                    </>
                  </Form.Item>
                ))}

                <Form.Item>
                  <Button
                    disabled={!(hasCustomer && hasVehicle)}
                    type="dashed"
                    onClick={() => add()}
                    style={{
                      width: '60%',
                    }}
                    icon={<PlusOutlined />}
                  >
                    Adicionar peça
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
          <FormRow>
            <Form.Item
              style={{ width: '50%' }}
              name="observacao"
              label="Observação"
              tooltip="Observação"
            >
              <TextArea
                row={3}
                showCount
                maxLength={500}
                placeholder="Digite as obserções referente a ordem de serviço"
              />
            </Form.Item>
            <Form.Item
              name="custoServico"
              label="Custo Mão de Obra"
              tooltip="O valor da mão de obra"
            >
              <InputNumber
                onChange={(v) => setTotal(v)}
                defaultValue={0}
                min={0}
              />
            </Form.Item>
            <Form.Item
              name="desconto"
              label="Desconto"
              tooltip="Valor de desconto"
            >
              <InputNumber
                onChange={(v) =>
                  setTotal(
                    Number(formRef.getFieldValue().precoSerico) -
                      (Number(formRef.getFieldValue().precoSerico) *
                        Number(v)) /
                        100
                  )
                }
                defaultValue={0}
                min={0}
              />
            </Form.Item>
            <Form.Item
              name="acrescimo"
              label="Acréscimo"
              tooltip="Valor de acréscimo"
            >
              <InputNumber
                onChange={(v) =>
                  setTotal(
                    Number(formRef.getFieldValue().precoSerico) -
                      (Number(formRef.getFieldValue().precoSerico) *
                        Number(v)) /
                        100
                  )
                }
                defaultValue={0}
                min={0}
              />
            </Form.Item>
          </FormRow>
        </Form>
        <div
          style={{
            width: '30%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Statistic title="Valor Total" value={total} />
          <Statistic title="Valor Bruto" value={total} />
        </div>
      </FormWarapper>
    </Wrapper>
  );
};

ServiceOrderForm.propTypes = {
  onSaveAsync: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  formRef: PropTypes.any.isRequired,
  boxShadow: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
  customers: PropTypes.array.isRequired,
};

export default ServiceOrderForm;
