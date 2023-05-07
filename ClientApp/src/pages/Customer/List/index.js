import React, { useEffect, useState } from 'react';

import { getFilters, onFilter } from '~/utils/componentUtils';
import { nameFormatterUtil } from '~/utils/formatterUtils';

import { Form } from 'antd';

import Table from '~/components/Table';
import CollumnAction from '~/components/Table/CollumnAction';
import CustomerForm from '~/components/Forms/CustomerForm';

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
      cep: '38408-128',
      estado: 'MG',
      cidade: 'Uberlândia',
      logradouro: 'Rua Mário Pinto Sobrinho',
      bairro: 'Santa Mônica',
      numero: 200,
      complemento: 'Próximo a UFU',
    },
  },
];

const constantsCollumns = [
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
    dataIndex: 'enderecoToShow',
    key: 'enderecoToShow',
  },
];

const SavedCustomers = () => {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
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
      .then(() => setRecords(data.map(formatCustomer)))
      .finally(() => setLoading(false));

    setSearchLoading(false);
  }, []);

  const formContent = (initialValues, formRef) => (
    <CustomerForm
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
    ...constantsCollumns,
    {
      title: 'Ações',
      dataIndex: '',
      key: 'x',
      render: (text, record) => {
        setSelectRecord(record);

        return (
          <CollumnAction
            onDelete={() => {}}
            onEdit={() => editFormRef.submit()}
            modalTitle="Atualização dos dados do cliente"
            modalContent={formContent(selectRecord, editFormRef)}
          />
        );
      },
    },
  ];

  const formatCustomer = (d) => {
    const nameParts = nameFormatterUtil(d.nome).split(' ');
    d.enderecoToShow = `${d.endereco.logradouro}, ${d.endereco.cidade} - ${d.endereco.estado} ${d.endereco.cep}`;
    d.nome = `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;

    return d;
  };

  return (
    <Table
      filterPlaceholder="Digite o valor para a busca..."
      title="Clientes Cadastrados"
      onChange={() => {}}
      onCreateClick={() => storeFormRef.submit()}
      searchLoading={searchLoading}
      loading={loading}
      data={records}
      columns={columns}
      width={350}
      pageSize={10}
      modalTitle="Cadastro de Clientes"
      modalContent={formContent({}, storeFormRef)}
    />
  );
};

export default SavedCustomers;
