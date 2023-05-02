import React from 'react';
import PropTypes from 'prop-types';
import { Table as AntdTable, Input, Button } from 'antd';

import { ActionsWrapper, Wrapper } from './styles';
import { PlusOutlined } from '@ant-design/icons';

const Table = ({
  data,
  title,
  width,
  pageSize,
  columns,
  loading,
  expandable,
  onChange,
  onCreateClick,
  filterPlaceholder,
  searchLoading,
}) => (
  <Wrapper>
    <h2>{title}</h2>
    <ActionsWrapper>
      <Input.Search
        style={{ width: 400 }}
        placeholder={filterPlaceholder}
        enterButton
        loading={searchLoading}
        size="large"
        onChange={() => onChange()}
      />
      <Button type="primary" icon={<PlusOutlined />} size='large' onClick={onCreateClick}>
        Cadastrar
      </Button>
    </ActionsWrapper>

    <AntdTable
      style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize,
      }}
      scroll={{
        y: width,
      }}
      expandable={expandable}
    />
  </Wrapper>
);

Table.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  filterPlaceholder: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  onCreateClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  searchLoading: PropTypes.bool,
  expandable: PropTypes.object,
};

export default Table;
