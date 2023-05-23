/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table as AntdTable, Input, Button } from 'antd';
import { LeftOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';

import history from '~/services/history';
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
  modalTitle = '',
  total = 0,
  modalContent = undefined,
  rowSelection = undefined,
  showSelectionButton = false,
  selectionButton = undefined,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Wrapper>
        <div>
          <h2>{title}</h2>
          {!!total && (
            <span>
              {total > 1
                ? `${total} registros encontrados`
                : '1 registro encontrado'}
            </span>
          )}
        </div>
        <ActionsWrapper>
          <Input
            style={{ width: 400 }}
            addonBefore={<SearchOutlined />}
            placeholder={filterPlaceholder}
            loading={searchLoading}
            onChange={() => onChange()}
          />
          <div>
            <Button
              type="dashed"
              style={{ marginRight: 5 }}
              icon={<LeftOutlined />}
              onClick={() => history.goBack()}
            >
              Voltar
            </Button>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() =>
                modalContent ? setOpenModal(true) : onCreateClick()
              }
            >
              Cadastrar
            </Button>
            {rowSelection && showSelectionButton ? selectionButton : undefined}
          </div>
        </ActionsWrapper>

        <AntdTable
          locale="pt-br"
          loading={loading}
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize,
          }}
          expandable={expandable}
          rowSelection={rowSelection}
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
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  columns: PropTypes.array.isRequired,
  filterPlaceholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCreateClick: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  rowSelection: PropTypes.object,
  loading: PropTypes.bool,
  searchLoading: PropTypes.bool,
  expandable: PropTypes.object,
  modalTitle: PropTypes.string,
  modalContent: PropTypes.node,
  selectionButton: PropTypes.node,
  showSelectionButton: PropTypes.bool,
  total: PropTypes.number,
};

export default Table;
