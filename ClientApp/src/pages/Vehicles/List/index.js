import React, { useEffect, useState } from 'react';

import { Form } from 'antd';

import { getFilters, onFilter } from '~/utils/componentUtils';

import CollumnAction from '~/components/Table/CollumnAction';
import Table from '~/components/Table';
import VehicleForm from '~/components/Forms/VehicleForm';

const data = [
  {
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    anoModelo: '2008/2008',
    placa: 'HJF-6254',
    quilometragem: '10010',
    cilindrada: '128',
    tipoCombustivel: 'Flex',
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
  },
  {
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    anoModelo: '2008/2008',
    placa: 'HJF-6254',
    quilometragem: '10010',
    cilindrada: '128',
    tipoCombustivel: 'Flex',
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
  },
  {
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    anoModelo: '2008/2008',
    placa: 'HJF-6254',
    quilometragem: '10010',
    cilindrada: '128',
    tipoCombustivel: 'Flex',
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
  },
  {
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    anoModelo: '2008/2008',
    placa: 'HJF-6254',
    quilometragem: '10010',
    cilindrada: '128',
    tipoCombustivel: 'Flex',
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
  },
  {
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    anoModelo: '2008/2008',
    placa: 'HJF-6254',
    quilometragem: '10010',
    cilindrada: '128',
    tipoCombustivel: 'Flex',
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
  },
  {
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    anoModelo: '2008/2008',
    placa: 'HJF-6254',
    quilometragem: '10010',
    cilindrada: '128',
    tipoCombustivel: 'Flex',
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
  },
  {
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    anoModelo: '2008/2008',
    placa: 'HJF-6254',
    quilometragem: '10010',
    cilindrada: '128',
    tipoCombustivel: 'Flex',
    cliente: {
      id: 1,
      nome: 'João Victor Fernandes de Souza Silva',
      razaoSocial: 'João Victor',
      documento: '67.117.218/0001-00',
    },
  },
];

const constantscolumns = [
  {
    title: 'Marca',
    dataIndex: 'marca',
    key: 'marca',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.marca.localeCompare(b.marca),
    filters: getFilters('marca', data),
    onFilter: (value, record) => onFilter(value, record, 'marca'),
    filterSearch: true,
  },
  {
    title: 'Modelo',
    dataIndex: 'modelo',
    key: 'modelo',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.modelo.localeCompare(b.modelo),
    filters: getFilters('modelo', data),
    onFilter: (value, record) => onFilter(value, record, 'modelo'),
    filterSearch: true,
  },
  {
    title: 'Ano/Modelo',
    dataIndex: 'anoModelo',
    key: 'anoModelo',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.anoModelo.localeCompare(b.anoModelo),
    filters: getFilters('anoModelo', data),
    onFilter: (value, record) => onFilter(value, record, 'anoModelo'),
  },
  {
    title: 'Placa',
    dataIndex: 'placa',
    key: 'placa',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: getFilters('placa', data),
    onFilter: (value, record) => onFilter(value, record, 'placa'),
  },
  {
    title: 'KM',
    dataIndex: 'quilometragem',
    key: 'quilometragem',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.quilometragem.localeCompare(b.quilometragem),
    filters: getFilters('quilometragem', data),
    onFilter: (value, record) => onFilter(value, record, 'quilometragem'),
  },
  {
    title: 'Cilindrada',
    dataIndex: 'cilindrada',
    key: 'cilindrada',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: getFilters('cilindrada', data),
    onFilter: (value, record) => onFilter(value, record, 'cilindrada'),
  },
  {
    title: 'Cliente',
    dataIndex: ['cliente', 'documento'],
    key: 'clienteDocumento',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.cliente.documento.localeCompare(b.cliente.documento),
    filters: getFilters('cliente.documento', data),
    onFilter: (value, record) => onFilter(value, record, 'cliente.documento'),
  },
];

const SavedVehicles = () => {
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [selectRecord, setSelectRecord] = useState({});

  const [editFormRef] = Form.useForm();
  const [storeFormRef] = Form.useForm();

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

  const formContent = (initialValues, formRef) => (
    <VehicleForm
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

        return (
          <CollumnAction
            onDelete={() => {}}
            onEdit={() => editFormRef.submit()}
            modalTitle="Atualização dos dados da peça"
            modalContent={formContent(selectRecord, editFormRef)}
          />
        );
      },
    },
  ];

  return (
    <Table
      filterPlaceholder="Digite o valor para a busca..."
      title="Veículos Cadastrados"
      onChange={() => {}}
      onCreateClick={() => storeFormRef.submit()}
      searchLoading={searchLoading}
      loading={loading}
      data={records}
      columns={columns}
      width={350}
      pageSize={10}
      modalTitle="Cadastro de Veículos"
      modalContent={formContent({}, storeFormRef)}
    />
  );
};

export default SavedVehicles;
