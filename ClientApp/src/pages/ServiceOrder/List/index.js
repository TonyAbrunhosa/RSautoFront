import React, { useEffect, useState } from 'react';

import { Tag, Form, Button } from 'antd';
import { DownloadOutlined, PrinterOutlined } from '@ant-design/icons';
import { getFilters, onFilter } from '~/utils/componentUtils';

import Table from '~/components/Table';
import CollumnAction from '~/components/Table/CollumnAction';
import ServiceOrderForm from '~/components/Forms/ServiceOrderForm';
import PartForm from '~/components/Forms/PartForm';

import FormModal from '~/components/Forms/FormModal';

import {
  dateToBrazilDateUtil,
  priceFormatterUtil,
} from '~/utils/formatterUtils';

const data = [
  {
    id: 1,
    descricao: 'Ordem a',
    status: 'em aberto',
    valorTotal: '12000',
    valorBruto: '14000',
    dataCadastro: new Date(),
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
    valorBruto: '14000',
    dataCadastro: new Date(),
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
    valorBruto: '14000',
    dataCadastro: new Date(),
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
    valorBruto: '14000',
    dataCadastro: new Date(),
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
    valorBruto: '14000',
    dataCadastro: new Date(),
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
    valorBruto: '14000',
    dataCadastro: new Date(),
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
    title: 'Data Cadastro',
    dataIndex: 'dataCadastro',
    key: 'dataCadastro',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.dataCadastro.toString().localeCompare(b.dataCadastro),
    render: (dataCadastro) => <span>{dateToBrazilDateUtil(dataCadastro)}</span>,
  },
  {
    title: 'Data Baixa',
    dataIndex: 'dataEmissao',
    key: 'dataEmissao',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.dataEmissao.toString().localeCompare(b.dataEmissao),
    render: (dataEmissao) => <span>{dateToBrazilDateUtil(dataEmissao)}</span>,
  },
  {
    title: 'Valor Bruto',
    dataIndex: 'valorBruto',
    key: 'valorBruto',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.valorBruto.localeCompare(b.cliente.valorBruto),
    render: (valorBruto) => <span>{priceFormatterUtil(valorBruto)}</span>,
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
  const [openPartFormModal, setOpenPartFormModal] = useState(false);
  const [showSelectionButton, setShowSelectionButton] = useState(false);
  const [selectRecord, setSelectRecord] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [storeFormRef] = Form.useForm();
  const [editFormRef] = Form.useForm();
  const [storePartRef] = Form.useForm();

  const onSelectChange = (newSelectedRowKeys) => {
    console.log(newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    setShowSelectionButton(newSelectedRowKeys.length > 0);
  };

  const formContent = (initialValues, formRef) => (
    <ServiceOrderForm
      storePart={() => setOpenPartFormModal(true)}
      customers={['João Victor - 67.117.218/0001-00']}
      boxShadow={false}
      size={100}
      formRef={formRef}
      initialValues={initialValues}
      onSaveAsync={() =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(console.log('aushua'));
          }, 1);
        })
      }
    />
  );

  const columns = [
    ...constantscolumns,
    {
      title: 'Ações',
      dataIndex: '',
      key: 'x',
      width: 90,
      render: (text, record) => {
        setSelectRecord(record);
        const actions = [
          {
            label: 'Imprimir',
            icon: (
              <PrinterOutlined style={{ marginRight: '5px', color: 'green' }} />
            ),
            onClick: () => {},
          },
        ];

        if (record.status.toLowerCase().trim() === 'em aberto') {
          actions.push({
            label: 'Emitir',
            icon: <DownloadOutlined style={{ marginRight: '5px' }} />,
            onClick: () => {},
          });
        }

        return (
          <CollumnAction
            actions={actions}
            shouldDelete={false}
            onEdit={() => editFormRef.submit()}
            modalTitle="Atualização dos dados da ordem de seriviço"
            modalContent={formContent(selectRecord, editFormRef)}
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
    <>
      <FormModal
        title="Cadastro de Peças"
        content={
          <PartForm
            suppliers={[]}
            boxShadow={false}
            size={100}
            formRef={storePartRef}
            initialValues={{}}
            onSaveAsync={() =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve(console.log('aushua'));
                }, 1);
              })
            }
          />
        }
        open={openPartFormModal}
        onCancel={() => setOpenPartFormModal(false)}
        onSave={() => {}}
        okText="Cadastrar"
      />
      <Table
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
        showSelectionButton={showSelectionButton}
        selectionButton={
          <Button
            style={{ marginLeft: 5, background: '#8c8c8c' }}
            type="primary"
            size="large"
            icon={<DownloadOutlined />}
          >
            Emitir
          </Button>
        }
        filterPlaceholder="Digite o valor para a busca..."
        title="Ordens de Serviço"
        onChange={() => {}}
        onCreateClick={() => storeFormRef.submit()}
        searchLoading={searchLoading}
        loading={loading}
        data={records}
        columns={columns}
        width={300}
        pageSize={10}
        modalTitle="Cadastro de Ordem de Serviço"
        modalContent={formContent({}, storeFormRef)}
      />
    </>
  );
};

export default SavedServiceOrders;
