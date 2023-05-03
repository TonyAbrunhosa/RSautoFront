import React, { useEffect, useState } from 'react';
import { Tag, Dropdown, Button, Divider, List } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { nameFormatterUtil } from '~/utils/formatterUtils';
import Table from '~/components/Table';
import history from '~/services/history';

const data = [
  {
    descricao: 'Vectra prata flex 2.0 a',
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    ano: '2008',
    placa: 'HJF-6254',
    km: '10010',
    cilindrada: '128',
    clienteCpfCnpj: '67.117.218/0001-00',
  },
  {
    descricao: 'Vectra prata flex 2.0 b',
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    ano: '2008',
    placa: 'HJF-6254',
    km: '10010',
    cilindrada: '128',
    clienteCpfCnpj: '67.117.218/0001-00',
  },
  {
    descricao: 'Vectra prata flex 2.0 c',
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    ano: '2008',
    placa: 'HJF-6254',
    km: '10010',
    cilindrada: '128',
    clienteCpfCnpj: '67.117.218/0001-00',
  },
  {
    descricao: 'Vectra prata flex 2.0 d',
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    ano: '2008',
    placa: 'HJF-6254',
    km: '10010',
    cilindrada: '128',
    clienteCpfCnpj: '67.117.218/0001-00',
  },
  {
    descricao: 'Vectra prata flex 2.0 e',
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    ano: '2008',
    placa: 'HJF-6254',
    km: '10010',
    cilindrada: '128',
    clienteCpfCnpj: '67.117.218/0001-00',
  },
  {
    descricao: 'Vectra prata flex 2.0 f',
    marca: 'Chevrolet',
    modelo: 'Hatch GT',
    ano: '2008',
    placa: 'HJF-6254',
    km: '10010',
    cilindrada: '128',
    clienteCpfCnpj: '67.117.218/0001-00',
  },
];

const CollumnAction = (
  <Dropdown
    menu={{
      items: [
        {
          key: '1',
          label: (
            <span>
              <EditOutlined style={{ color: '#1099d7', marginRight: '5px' }} />
              Editar
            </span>
          ),
        },
        {
          key: '2',
          label: (
            <span>
              <DeleteOutlined
                style={{ color: '#fd163d', marginRight: '5px' }}
              />
              Excluir
            </span>
          ),
        },
      ],
    }}
    placement="bottom"
    arrow={{ pointAtCenter: true }}
  >
    <Button type="text" icon={<MoreOutlined />} />
  </Dropdown>
);

const getFilters = (name, records) =>
  [...new Set(records.map((r) => r[name]))].map((r) => ({
    text: nameFormatterUtil(r),
    value: r,
  }));

const columns = [
  {
    title: 'Descrição',
    dataIndex: 'descricao',
    key: 'descricao',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.descricao.localeCompare(b.descricao),
    filters: getFilters('descricao', data),
    onFilter: (value, record) => record.descricao.startsWith(value),
    filterSearch: true,
  },
  {
    title: 'Marca',
    dataIndex: 'marca',
    key: 'marca',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.marca.localeCompare(b.marca),
    filters: getFilters('marca', data),
    onFilter: (value, record) => record.marca.startsWith(value),
    filterSearch: true,
  },
  {
    title: 'Modelo',
    dataIndex: 'modelo',
    key: 'modelo',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.modelo.localeCompare(b.modelo),
    filters: getFilters('modelo', data),
    onFilter: (value, record) => record.modelo.startsWith(value),
    filterSearch: true,
  },
  {
    title: 'Ano',
    dataIndex: 'ano',
    key: 'ano',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: getFilters('ano', data),
    onFilter: (value, record) => record.ano.startsWith(value),
  },
  {
    title: 'Placa',
    dataIndex: 'placa',
    key: 'placa',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: getFilters('placa', data),
    onFilter: (value, record) => record.placa.startsWith(value),
  },
  {
    title: 'KM',
    dataIndex: 'km',
    key: 'km',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: getFilters('km', data),
    onFilter: (value, record) => record.km.startsWith(value),
  },
  {
    title: 'Cilindrada',
    dataIndex: 'cilindrada',
    key: 'cilindrada',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: getFilters('cilindrada', data),
    onFilter: (value, record) => record.cilindrada.startsWith(value),
  },
  {
    title: 'Cliente',
    dataIndex: 'clienteCpfCnpj',
    key: 'clienteCpfCnpj',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: getFilters('clienteCpfCnpj', data),
    onFilter: (value, record) => record.clienteCpfCnpj.startsWith(value),
  },
  {
    title: 'Ações',
    dataIndex: '',
    key: 'x',
    render: () => CollumnAction,
  },
];

const SavedVehicles = () => {
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  const [records, setRecords] = useState([]);

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
      title="Veículos Cadastrados"
      onChange={() => {}}
      onCreateClick={() => history.push('cadastrar-veiculo')}
      searchLoading={searchLoading}
      loading={loading}
      data={records}
      columns={columns}
      width={400}
      pageSize={10}
    />
  );
};

export default SavedVehicles;
