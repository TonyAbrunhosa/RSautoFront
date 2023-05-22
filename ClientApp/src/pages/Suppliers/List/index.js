import React, { useEffect, useState } from 'react';

import { Form, Typography } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

import { getFilters, onFilter } from '~/utils/componentUtils';
import { nameFormatterUtil } from '~/utils/formatterUtils';

import Table from '~/components/Table';
import CollumnAction from '~/components/Table/CollumnAction';
import SupplierForm from '~/components/Forms/UserForm';

const data = [
  {
    id: 1,
    nome: 'Joao Corporaçõe',
    razaoSocial: 'Joao Corporações',
    documento: '67.117.218/0001-00',
    telefone: '',
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

const constantscolumns = [
  {
    title: 'Nome/Razão Social',
    dataIndex: 'nome',
    key: 'nome',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.nome.localeCompare(b.nome),
    filters: getFilters('nome', data),
    onFilter: (value, record) => onFilter(value, record, 'nome'),
    filterSearch: true,
  },
  {
    title: 'Documento',
    dataIndex: 'documento',
    key: 'documento',
    filters: getFilters('documento', data),
    onFilter: (value, record) => onFilter(value, record, 'documento'),
    filterSearch: true,
    render: (documento) => (
      <Typography.Text
        copyable={{ icon: <CopyOutlined style={{ color: '#2e2e2e' }} /> }}
      >
        {documento}
      </Typography.Text>
    ),
  },
  {
    title: 'Telefone',
    dataIndex: 'telefone',
    key: 'telefone',
    filters: getFilters('telefone', data),
    onFilter: (value, record) => onFilter(value, record, 'telefone'),
    filterSearch: true,
    render: (telefone) => 
      telefone ? (
        <Typography.Text
          copyable={{ icon: <CopyOutlined style={{ color: '#2e2e2e' }} /> }}
        >
          {telefone}
        </Typography.Text>
      ) : (
        'N/A'
      )
  },
  {
    title: 'Celular',
    dataIndex: 'celular',
    key: 'celular',
    filters: getFilters('celular', data),
    onFilter: (value, record) => onFilter(value, record, 'celular'),
    filterSearch: true,
    render: (celular) => (
      <Typography.Text
        copyable={{ icon: <CopyOutlined style={{ color: '#2e2e2e' }} /> }}
      >
        <a
          href={`https://api.whatsapp.com/send?phone=${celular}`}
          target="_blank"
          rel="noreferrer"
        >
          {celular}
        </a>
      </Typography.Text>
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
      <Typography.Text
        copyable={{ icon: <CopyOutlined style={{ color: '#2e2e2e' }} /> }}
      >
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          {email}
        </a>
      </Typography.Text>
    ),
  },
  {
    title: 'Endereço',
    dataIndex: 'enderecoToShow',
    key: 'enderecoToShow',
  },
];

const SavedSuppliers = () => {
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
      .then(() => setRecords(data.map(formatSupplier)))
      .finally(() => setLoading(false));

    setSearchLoading(false);
  }, []);

  const formContent = (initialValues, formRef) => (
    <SupplierForm
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
      width: 90,
      key: 'x',
      render: (text, record) => {
        setSelectRecord(record);

        return (
          <CollumnAction
            onDelete={() => {}}
            onEdit={() => editFormRef.submit()}
            modalTitle="Atualização dos dados do fornecedor"
            modalContent={formContent(selectRecord, editFormRef)}
          />
        );
      },
    },
  ];

  const formatSupplier = (d) => {
    const nameParts = nameFormatterUtil(d.nome).split(' ');
    d.enderecoToShow = `${d.endereco.logradouro}, ${d.endereco.cidade} - ${d.endereco.estado} ${d.endereco.cep}`;
    d.nome = `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;

    return d;
  };

  return (
    <Table
      filterPlaceholder="Digite o valor para a busca..."
      title="Fornecedores Cadastrados"
      onChange={() => {}}
      onCreateClick={() => storeFormRef.submit()}
      searchLoading={searchLoading}
      loading={loading}
      data={records}
      columns={columns}
      width={350}
      pageSize={10}
      modalTitle="Cadastro de Fornecedor"
      modalContent={formContent({}, storeFormRef)}
    />
  );
};

export default SavedSuppliers;
