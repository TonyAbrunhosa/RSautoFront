import React from 'react';
import PropTypes from 'prop-types';
import { Table as AntdTable, Input } from 'antd';

import { Header, Wrapper } from './styles';

const Table = ({
  data,
  title,
  width,
  pageSize,
  columns,
  loading,
  expandable,
  onChange,
  filterPlaceholder,
  searchLoading,
}) => (
  <Wrapper>
    <Header>
      <h2>{title}</h2>
      <Input.Search
        style={{ width: 400 }}
        placeholder={filterPlaceholder}
        enterButton
        loading={searchLoading}
        size="large"
        onChange={() => onChange()}
      />
    </Header>

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
  loading: PropTypes.bool,
  searchLoading: PropTypes.bool,
  expandable: PropTypes.object,
};

export default Table;
