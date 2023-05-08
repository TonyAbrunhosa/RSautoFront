/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Button, Popconfirm, Modal } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CollumnAction = ({
  onDelete = () => {},
  onEdit = () => {},
  modalContent = null,
  modalTitle = '',
  edit = true,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const getDropdownItems = () => {
    const dropdownItems = [];

    if (edit) {
      dropdownItems.push({
        key: 1,
        label: (
          <>
            <span
              onClick={() => setOpenModal(true)}
              onKeyPress={() => {}}
              role="button"
              tabIndex="0"
            >
              <EditOutlined style={{ color: '#1099d7', marginRight: '5px' }} />
              Editar
            </span>
            <Modal
              destroyOnClose
              title={modalTitle}
              open={openModal}
              centered
              onOk={() => onEdit()}
              onCancel={() => setOpenModal(false)}
              width="75%"
              okText="Atualizar"
              cancelText="Cancelar"
              okButtonProps={{
                size: 'large',
              }}
              cancelButtonProps={{
                type: 'ghost',
                size: 'large',
                style: { backgroundColor: '#fd163d', color: '#ffff' },
              }}
            >
              <div
                id="scrollableDiv"
                style={{
                  border: '1px solid #e8e9e9',
                  borderRadius: '5px',
                  height: 400,
                  overflow: 'auto',
                  marginBottom: '20px',
                }}
              >
                {modalContent}
              </div>
            </Modal>
          </>
        ),
      });
    }

    dropdownItems.push({
      key: 2,
      label: (
        <Popconfirm
          onConfirm={onDelete}
          title="Excluir registro"
          description="Você tem certeza que deseja excluir este registro?"
          okText="Sim"
          cancelText="Não"
        >
          <span>
            <DeleteOutlined style={{ color: '#fd163d', marginRight: '5px' }} />
            Excluir
          </span>
        </Popconfirm>
      ),
    });

    return dropdownItems;
  };

  return (
    <Dropdown
      menu={{
        items: getDropdownItems(),
      }}
      placement="bottom"
      arrow={{ pointAtCenter: true }}
    >
      <Button type="text" icon={<MoreOutlined />} />
    </Dropdown>
  );
};

CollumnAction.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func,
  modalContent: PropTypes.node,
  modalTitle: PropTypes.string,
  edit: PropTypes.bool,
};

export default CollumnAction;
