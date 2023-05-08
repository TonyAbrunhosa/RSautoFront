import React, { useEffect, useState } from 'react';

import { Tag, Typography } from 'antd';
import { getFilters, onFilter } from '~/utils/componentUtils';

import Table from '~/components/Table';
import CollumnAction from '~/components/Table/CollumnAction';
import { CopyOutlined, EditOutlined } from '@ant-design/icons';

const data = [
  {
    id: 1,
    descricao: 'Fornecedor a',
    pecas: [
      { id: 1, descricao: 'peca a' },
      { id: 2, descricao: 'peca b' },
      { id: 3, descricao: 'peca c' },
    ],
  },
  {
    id: 2,
    descricao: 'Fornecedor b',
    pecas: [
      { id: 1, descricao: 'peca a' },
      { id: 2, descricao: 'peca b' },
      { id: 3, descricao: 'peca c' },
    ],
  },
  {
    id: 3,
    descricao: 'Fornecedor c',
    pecas: [
      { id: 1, descricao: 'peca a' },
      { id: 2, descricao: 'peca b' },
      { id: 3, descricao: 'peca c' },
    ],
  },
  {
    id: 4,
    descricao: 'Fornecedor d',
    pecas: [
      { id: 1, descricao: 'peca a' },
      { id: 2, descricao: 'peca b' },
      { id: 3, descricao: 'peca c' },
    ],
  },
  {
    id: 5,
    descricao: 'Fornecedor e',
    pecas: [
      { id: 1, descricao: 'peca a' },
      { id: 2, descricao: 'peca b' },
      { id: 3, descricao: 'peca c' },
    ],
  },
  {
    id: 6,
    descricao: 'Fornecedor f',
    pecas: [
      { id: 1, descricao: 'peca a' },
      { id: 2, descricao: 'peca b' },
      { id: 3, descricao: 'peca c' },
    ],
  },
];

const columns = [
  {
    title: 'Descrição',
    dataIndex: 'descricao',
    key: 'descricao',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.nome.localeCompare(b.nome),
    filters: getFilters('descricao', data),
    onFilter: (value, record) => onFilter(value, record, 'descricao'),
    filterSearch: true,
    render: (descricao) => (
      <Typography.Text  copyable={{icon: <CopyOutlined style={{color:'#2e2e2e'}} /> }} editable={{icon: <EditOutlined style={{color:'#2e2e2e'}} />}} >
        {descricao}
      </Typography.Text>
    )
  },
  {
    title: 'Peças Relacionadas',
    dataIndex: 'pecas',
    key: 'pecas',
    render: (pecas) => (
      <>
        {pecas && pecas.length ? (
          pecas.map((peca) => (
            <Tag color="blue" key={peca.descricao}>
              {peca.descricao}
            </Tag>
          ))
        ) : (
          <Tag color="blue" key="na">
            N/A
          </Tag>
        )}
      </>
    ),
  },
  {
    title: 'Ações',
    dataIndex: '',
    key: 'x',
    width: 90,
    render: (text, record) => (
      <CollumnAction edit={false} onDelete={() => {}} />
    ),
  },
];

const Suppliers = () => {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

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
      title="Fornecedores"
      onChange={() => {}}
      onCreateClick={() => {}}
      searchLoading={searchLoading}
      loading={loading}
      data={records}
      columns={columns}
      width={300}
      pageSize={10}
    />
  );
};

export default Suppliers;
