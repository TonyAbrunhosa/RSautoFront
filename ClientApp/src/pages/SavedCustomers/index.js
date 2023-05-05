import React, { useEffect, useState } from 'react';

import history from '~/services/history';
import { getFilters, onFilter } from '~/utils/componentUtils';
import { nameFormatterUtil } from '~/utils/formatterUtils';

import Table from '~/components/Table';
import CollumnAction from '~/components/Table/ActionDropdow';

const data = [
  {
    id: 1,
    nome: 'João Victor',
    razaoSocial: 'Joao Corporações',
    documento: '67.117.218/0001-00',
    telefone: 'N/A',
    celular: '34984217839',
    email: 'jvsfernandes924@gmail.com',
    endereco: {
      cep: '38175000',
      estado: 'MG',
      cidade: 'Santa Juliana',
      logradouro: 'Rua Suiça, 350',
      complemento: 'Próximo a Agro Pub',
    }
  }
];

const columns = [
  {
    title: 'Razão Social',
    dataIndex: 'razaoSocial',
    key: 'razaoSocial',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.marca.localeCompare(b.razaoSocial),
    filters: getFilters('razaoSocial', data),
    onFilter: (value, record) => onFilter(value, record, 'razaoSocial'),
    filterSearch: true,
  },
  {
    title: 'Documento',
    dataIndex: 'documento',
    key: 'documento',
    filters: getFilters('documento', data),
    onFilter: (value, record) => onFilter(value, record, 'documento'),
    filterSearch: true,
  },
  {
    title: 'Telefone',
    dataIndex: 'telefone',
    key: 'telefone',
    filters: getFilters('telefone', data),
    onFilter: (value, record) => onFilter(value, record, 'telefone'),
    filterSearch: true,
  },
  {
    title: 'Celular',
    dataIndex: 'celular',
    key: 'celular',
    filters: getFilters('celular', data),
    onFilter: (value, record) => onFilter(value, record, 'celular'),
    filterSearch: true,
    render: (telefone) => (
      <a
        href={`https://api.whatsapp.com/send?phone=${telefone}`}
        target="_blank"
        rel="noreferrer"
      >
        {telefone}
      </a>
    ),
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
    filters: getFilters('email', data),
    onFilter: (value, record) => onFilter(value, record, 'email'),
    filterSearch: true,
    render: (email) => (
      <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
        {email}
      </a>
    ),
  },
  {
    title: 'Endereço',
    dataIndex: 'endereco',
    key: 'endereco',
  },
  {
    title: 'Ações',
    dataIndex: '',
    key: 'x',
    render: () => <CollumnAction />,
  },
];


const SavedCustomers = () => {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const formatCustomer = (d) => {
    const nameParts = nameFormatterUtil(d.nome).split(' ');
    d.endereco = `${d.endereco.logradouro}, ${d.endereco.cidade} - ${d.endereco.estado} ${d.endereco.cep}`;
    d.nome = `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
  
    return d;
  };

  useEffect(() => {
    const loadData = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(console.log('Delay'));
        }, 2000);
      });

    loadData()
      .then(() => setRecords(data.map(formatCustomer)))
      .finally(() => setLoading(false));

    setSearchLoading(false);
  }, []);

  return (
    <Table
      filterPlaceholder="Digite o valor para a busca..."
      title="Clientes Cadastrados"
      onChange={() => {}}
      onCreateClick={() => history.push('cadastrar-cliente')}
      searchLoading={searchLoading}
      loading={loading}
      data={records}
      columns={columns}
      width={350}
      pageSize={10}
    />
  );
};

export default SavedCustomers;
