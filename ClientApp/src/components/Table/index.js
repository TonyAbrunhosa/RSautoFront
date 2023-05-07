/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table as AntdTable, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import FormModal from '../Forms/FormModal';

import { ActionsWrapper, Wrapper } from './styles';

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
  modalTitle,
  modalContent,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
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
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            onClick={() => setOpenModal(true)}
          >
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
      <FormModal
        title={modalTitle}
        content={modalContent}
        open={openModal}
        onCancel={() => setOpenModal(false)}
        onSave={() => onCreateClick()}
        okText="Cadastrar"
      />
    </>
  );
};

Table.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.node.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  columns: PropTypes.array.isRequired,
  filterPlaceholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCreateClick: PropTypes.func.isRequired,
  onFilter: PropTypes.func,
  loading: PropTypes.bool,
  searchLoading: PropTypes.bool,
  expandable: PropTypes.object,
};

export default Table;
