import React, { useEffect, useState } from 'react';

import { Tag, Divider, List, Form } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import InfiniteScroll from 'react-infinite-scroll-component';

import history from '~/services/history';

import { getFilters, onFilter } from '~/utils/componentUtils';

import Table from '~/components/Table';
import CollumnAction from '~/components/Table/CollumnAction';
import PartForm from '~/components/Forms/PartForm';

const data = [
  {
    id: 1,
    descricao: 'Pneu Aro 13 a',
    marca: 'Goodyear a',
    codigo: '109712',
    status: 'ativa',
    veiculo: {
      modelo: 'Vectra GT 2.0 Flex manual',
      marca: 'Chevrolet',
      ano: '2008/2008'
    },
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
    id: 1,
    descricao: 'Pneu Aro 13 a',
    marca: 'Goodyear a',
    codigo: '109712',
    status: 'ativa',
    veiculo: {
      modelo: 'Vectra GT 2.0 Flex manual',
      marca: 'Chevrolet',
      ano: '2008/2008'
    },
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
    id: 1,
    descricao: 'Pneu Aro 13 a',
    marca: 'Goodyear a',
    codigo: '109712',
    status: 'ativa',
    veiculo: {
      modelo: 'Vectra GT 2.0 Flex manual',
      marca: 'Chevrolet',
      ano: '2008/2008'
    },
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
    id: 1,
    descricao: 'Pneu Aro 13 a',
    marca: 'Goodyear a',
    codigo: '109712',
    status: 'ativa',
    veiculo: {
      modelo: 'Vectra GT 2.0 Flex manual',
      marca: 'Chevrolet',
      ano: '2008/2008'
    },
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
    id: 1,
    descricao: 'Pneu Aro 13 a',
    marca: 'Goodyear a',
    codigo: '109712',
    status: 'ativa',
    veiculo: {
      modelo: 'Vectra GT 2.0 Flex manual',
      marca: 'Chevrolet',
      ano: '2008/2008'
    },
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
    id: 1,
    descricao: 'Pneu Aro 13 a',
    marca: 'Goodyear a',
    codigo: '109712',
    status: 'ativa',
    veiculo: {
      modelo: 'Vectra GT 2.0 Flex manual',
      marca: 'Chevrolet',
      ano: '2008/2008'
    },
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
  }
];

const constantsCollumns = [
  {
    title: 'Descrição',
    dataIndex: 'descricao',
    key: 'descricao',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.nome.localeCompare(b.nome),
    filters: getFilters('descricao', data),
    onFilter: (value, record) => onFilter(value, record, 'descricao'),
    filterSearch: true,
  },
  {
    title: 'Código',
    dataIndex: 'codigo',
    key: 'codigo',
    filters: getFilters('codigo', data),
    onFilter: (value, record) => onFilter(value, record, 'codigo'),
    filterSearch: true,
  },
  {
    title: 'Marca Peça',
    dataIndex: 'marca',
    key: 'marca',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.marca.localeCompare(b.marca),
    filters: getFilters('marca', data),
    onFilter: (value, record) => onFilter(value, record, 'marca'),
    filterSearch: true,
  },
  {
    title: 'Marca Veículo',
    dataIndex: ['veiculo', 'marca'],
    key: 'marcaVeiculo',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.veiculo.marca.localeCompare(b.veiculo.marca),
    filters: getFilters('veiculo.marca', data),
    onFilter: (value, record) => onFilter(value, record, 'veiculo.marca'),
    filterSearch: true,
  },
  {
    title: 'Modelo Veículo',
    dataIndex: ['veiculo', 'modelo'],
    key: 'modeloVeiculo',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.veiculo.modelo.localeCompare(b.veiculo.modelo),
    filters: getFilters('veiculo.modelo', data),
    onFilter: (value, record) => onFilter(value, record, 'veiculo.modelo'),
    filterSearch: true,
  },
  {
    title: 'Ano/Modelo',
    dataIndex: ['veiculo', 'ano'],
    key: 'anoModelo',
    filters: getFilters('veiculo.ano', data),
    onFilter: (value, record) => onFilter(value, record, 'veiculo.ano'),
    filterSearch: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: getFilters('status', data),
    onFilter: (value, record) => onFilter(value, record, 'status'),
    render: (tag) => (
      <Tag color={tag === 'ativa' ? 'green' : 'red'} key={tag}>
        {tag.toUpperCase()}
      </Tag>
    ),
  }
];

const SavedParts = () => {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [selectRecord, setSelectRecord] = useState({});

  const [formRef] = Form.useForm();

  const columns = [
    ...constantsCollumns,
    {
      title: 'Ações',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => {
        setSelectRecord(record);

        return (
          <CollumnAction
            onDelete={() => {}}
            onEdit={() => formRef.submit()}
            modalTitle="Atualização dos dados da peça"
            modalContent={
              <PartForm
                suppliers={[]}
                boxShadow={false}
                size={100}
                formRef={formRef}
                initialValues={selectRecord}
                onSaveAsync={() =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve(console.log('aushua'));
                    }, 1);
                  })
                }
              />
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
      title="Peças Cadastradas"
      onChange={() => {}}
      onCreateClick={() => history.push('cadastrar-peca')}
      searchLoading={searchLoading}
      loading={loading}
      data={records}
      columns={columns}
      width={300}
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
