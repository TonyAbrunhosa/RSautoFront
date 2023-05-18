import React, { useEffect, useState } from 'react';

import { Tag, Typography, Form } from 'antd';
import { getFilters, onFilter } from '~/utils/componentUtils';

import Table from '~/components/Table';
import CollumnAction from '~/components/Table/CollumnAction';
import ServiceOrderForm from '~/components/Forms/ServiceOrderForm';

import {
  dateToBrazilDateUtil,
  priceFormatterUtil,
} from '~/utils/formatterUtils';
import { CopyOutlined } from '@ant-design/icons';

const data = [
  {
    id: 1,
    descricao: 'Ordem a',
    status: 'em aberto',
    valorTotal: '12000',
    valorUnitario: '1000',
    dataEmissao: new Date(),
    numero: '1234',
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
    pecas: [
      { id: 1, codigo: 'peca a' },
      { id: 2, codigo: 'peca b' },
      { id: 3, codigo: 'peca c' },
    ],
    veiculo: {
      placa: 'HJF-6254',
    },
  },
  {
    id: 2,
    numero: '1235',
    valorTotal: '12000',
    status: 'em aberto',
    valorUnitario: '1000',
    dataEmissao: new Date(),
    descricao: 'Ordem b',
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
    pecas: [
      { id: 1, codigo: 'peca a' },
      { id: 2, codigo: 'peca b' },
      { id: 3, codigo: 'peca c' },
    ],
    veiculo: {
      placa: 'HJF-6254',
    },
  },
  {
    id: 3,
    descricao: 'Ordem c',
    valorTotal: '12000',
    status: 'em aberto',
    valorUnitario: '1000',
    numero: '1236',
    dataEmissao: new Date(),
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
    pecas: [
      { id: 1, codigo: 'peca a' },
      { id: 2, codigo: 'peca b' },
      { id: 3, codigo: 'peca c' },
    ],
    veiculo: {
      placa: 'HJF-6254',
    },
  },
  {
    id: 4,
    numero: '1237',
    descricao: 'Ordem d',
    status: 'em aberto',
    valorTotal: '12000',
    valorUnitario: '1000',
    dataEmissao: new Date(),
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
    pecas: [
      { id: 1, codigo: 'peca a' },
      { id: 2, codigo: 'peca b' },
      { id: 3, codigo: 'peca c' },
    ],
    veiculo: {
      placa: 'HJF-6254',
    },
  },
  {
    id: 5,
    numero: '1238',
    valorTotal: '12000',
    status: 'em aberto',
    valorUnitario: '1000',
    descricao: 'Ordem e',
    dataEmissao: new Date(),
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
    pecas: [
      { id: 1, codigo: 'peca a' },
      { id: 2, codigo: 'peca b' },
      { id: 3, codigo: 'peca c' },
    ],
    veiculo: {
      placa: 'HJF-6254',
    },
  },
  {
    id: 6,
    numero: '1239',
    descricao: 'Ordem f',
    status: 'fechada',
    valorTotal: '12000',
    valorUnitario: '1000',
    dataEmissao: new Date(),
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
    pecas: [
      { id: 1, codigo: 'peca a' },
      { id: 2, codigo: 'peca b' },
      { id: 3, codigo: 'peca c' },
    ],
    veiculo: {
      placa: 'HJF-6254',
    },
  },
];

const constantscolumns = [
  {
    title: 'Número',
    dataIndex: 'numero',
    key: 'numero',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.numero.localeCompare(b.numero),
    filters: getFilters('numero', data),
    onFilter: (value, record) => onFilter(value, record, 'numero'),
    filterSearch: true,
  },
  {
    title: 'Cliente',
    dataIndex: ['cliente', 'nome'],
    key: 'nome',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.cliente.nome.localeCompare(b.cliente.nome),
    filters: getFilters('cliente.nome', data),
    onFilter: (value, record) => onFilter(value, record, 'cliente.nome'),
    filterSearch: true,
  },
  {
    title: 'Veículo',
    dataIndex: ['veiculo', 'placa'],
    key: 'placaVeiculo',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.veiculo.placa.localeCompare(b.veiculo.placa),
    filters: getFilters('veiculo.placa', data),
    onFilter: (value, record) => onFilter(value, record, 'veiculo.placa'),
    filterSearch: true,
    render: (placa) => (
      <Typography.Text
        copyable={{ icon: <CopyOutlined style={{ color: '#2e2e2e' }} /> }}
      >
        {placa}
      </Typography.Text>
    ),
  },
  {
    title: 'Data Emissão',
    dataIndex: 'dataEmissao',
    key: 'dataEmissao',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.dataEmissao.toString().localeCompare(b.dataEmissao),
    render: (dataEmissao) => <span>{dateToBrazilDateUtil(dataEmissao)}</span>,
  },
  {
    title: 'Valor Total',
    dataIndex: 'valorTotal',
    key: 'valorTotal',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.valorTotal.localeCompare(b.cliente.valorTotal),
    render: (valorTotal) => <span>{priceFormatterUtil(valorTotal)}</span>,
  },
  {
    title: 'Valor Unitário',
    dataIndex: 'valorUnitario',
    key: 'valorUnitario',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.valorUnitario.localeCompare(b.valorUnitario),
    render: (valorUnitario) => <span>{priceFormatterUtil(valorUnitario)}</span>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: getFilters('status', data),
    onFilter: (value, record) => onFilter(value, record, 'status'),
    render: (status) => (
      <Tag color={status === 'em aberto' ? 'green' : 'red'} key={status}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
];

const SavedServiceOrders = () => {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const [storeFormRef] = Form.useForm();

  const columns = [
    ...constantscolumns,
    {
      title: 'Ações',
      dataIndex: '',
      key: 'x',
      width: 90,
      render: () => {
        return (
          <CollumnAction
            onDelete={() => {}}
            edit={false}
            modalTitle=""
            modalContent={
              <ServiceOrderForm formRef={storeFormRef} initialValues={{}} />
            }
          />
        );
      },
    },
  ];

  useEffect(() => {
    const loadData = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(console.log('Delay'));
        }, 2000);
      });

    loadData()
      .then(() => setRecords(data))
      .finally(() => setLoading(false));

    setSearchLoading(false);
  }, []);

  return (
    <Table
      filterPlaceholder="Digite o valor para a busca..."
      title="Ordens de Serviço Salvas"
      onChange={() => {}}
      onCreateClick={() => storeFormRef.submit()}
      searchLoading={searchLoading}
      loading={loading}
      data={records}
      columns={columns}
      width={300}
      pageSize={10}
      modalTitle="Cadastro de Ordens de Serviço"
      modalContent={
        <ServiceOrderForm
          customers={['João Victor - 67.117.218/0001-00']}
          boxShadow={false}
          size={100}
          formRef={storeFormRef}
          initialValues={{}}
        />
      }
    />
  );
};

export default SavedServiceOrders;
