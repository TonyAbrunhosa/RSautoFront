import React, { useEffect, useState } from 'react';
import { Tag, Dropdown, Button, Divider, List } from 'antd';
import {
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
import InfiniteScroll from 'react-infinite-scroll-component';

import { nameFormatterUtil } from '~/utils/formatterUtils';
import Table from '~/components/Table';
import history from '~/services/history';

const data = [
  {
    key: 1,
    nome: 'Pneu Aro 13 a',
    marca: 'Goodyear a',
    status: 'ativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
  },
  {
    key: 2,
    nome: 'Pneu Aro 13 b',
    marca: 'Goodyear b',
    status: 'ativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
  },
  {
    key: 3,
    nome: 'Pneu Aro 13 c',
    marca: 'Goodyear c',
    status: 'ativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
  },
  {
    key: 4,
    nome: 'Pneu Aro 13 d',
    marca: 'Goodyear d',
    status: 'ativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
  },
  {
    key: 5,
    nome: 'Pneu Aro 13 e',
    marca: 'Goodyear e',
    status: 'ativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
  },
  {
    key: 6,
    nome: 'Pneu Aro 13 f',
    marca: 'Goodyear f',
    status: 'ativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
  },
  {
    key: 7,
    nome: 'Pneu Aro 13 g',
    marca: 'Goodyear g',
    status: 'ativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
  },
  {
    key: 8,
    nome: 'Pneu Aro 13 h',
    marca: 'Goodyear h',
    status: 'ativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
  },
  {
    key: 9,
    nome: 'Pneu Aro 13 i',
    marca: 'Goodyear i',
    status: 'ativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
  },
  {
    key: 10,
    nome: 'Pneu Aro 13 j',
    marca: 'Goodyear j',
    status: 'ativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
  },
  {
    key: 11,
    nome: 'Pneu Aro 13 k',
    marca: 'Goodyear k',
    status: 'ativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
  },
  {
    key: 12,
    nome: 'Pneu Aro 13 l',
    marca: 'Goodyear l',
    status: 'inativa',
    modelo: 'Direction 2',
    fornecedores: [
      {
        nome: 'Fornecedor 1',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 2',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 3',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
      {
        nome: 'Fornecedor 4',
        lote: 'N/A',
        estoque: 6,
        precoUnitario: 'R$ 300',
        custoUnitario: 'R$ 200',
      },
    ],
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
              <EditOutlined
                style={{ color: '#1099d7', marginRight: '5px' }}
              />
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
    dataIndex: 'nome',
    key: 'nome',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.nome.localeCompare(b.nome),
    filters: getFilters('nome', data),
    onFilter: (value, record) => record.nome.startsWith(value),
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
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: getFilters('status', data),
    onFilter: (value, record) => record.status.startsWith(value),
    render: (tag) => (
      <Tag color={tag === 'ativa' ? 'green' : 'red'} key={tag}>
        {tag.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Ações',
    dataIndex: '',
    key: 'x',
    render: () => CollumnAction,
  },
];

const SavedParts = () => {
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
      title="Peças Cadastradas"
      onChange={() => {}}
      onCreateClick={() => history.push('cadastrar-peca')}
      searchLoading={searchLoading}
      loading={loading}
      data={records}
      columns={columns}
      width={400}
      pageSize={10}
      expandable={{
        showExpandColumn: true,
        expandIcon: ({ expanded, onExpand, record }) =>
          expanded ? (
            <EyeInvisibleOutlined
              style={{ color: '#fd163d' }}
              onClick={(e) => onExpand(record, e)}
            />
          ) : (
            <EyeOutlined
              style={{ color: '#1099d7' }}
              onClick={(e) => onExpand(record, e)}
            />
          ),
        expandedRowRender: (record) => (
          <div
            id="scrollableDiv"
            style={{
              height: 225,
              overflow: 'auto',
              padding: '0 16px',
              border: '1px solid rgba(140, 140, 140, 0.35)',
            }}
          >
            <InfiniteScroll
              dataLength={record.fornecedores.length}
              next={() => {}}
              hasMore={record.fornecedores.length < 3}
              endMessage={<Divider plain>Não há mais fornecedores</Divider>}
              scrollableTarget="scrollableDiv"
            >
              <List
                dataSource={record.fornecedores}
                renderItem={(item) => (
                  <List.Item key={item.nome}>
                    <List.Item.Meta
                      title="Fornecedor"
                      description={item.nome}
                    />
                    <List.Item.Meta
                      title="Estoque"
                      description={item.estoque}
                    />
                    <List.Item.Meta title="Lote" description={item.lote} />
                    <List.Item.Meta
                      title="Preço unitário"
                      description={item.precoUnitario}
                    />
                    <List.Item.Meta
                      title="Custo unitário"
                      description={item.custoUnitario}
                    />
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </div>
        ),
      }}
    />
  );
};

export default SavedParts;
