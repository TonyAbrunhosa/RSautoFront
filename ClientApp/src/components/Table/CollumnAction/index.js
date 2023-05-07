import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Button, Popconfirm } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import FormModal from '~/components/Forms/FormModal';

const CollumnAction = ({
  onDelete = () => {},
  onEdit = () => {},
  modalContent,
  modalTitle,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: '1',
            label: (
              <>
                <span
                  onClick={() => setOpenModal(true)}
                  onKeyPress={() => {}}
                  role="button"
                  tabIndex="0"
                >
                  <EditOutlined
                    style={{ color: '#1099d7', marginRight: '5px' }}
                  />
                  Editar
                </span>
                <FormModal
                  title={modalTitle}
                  content={modalContent}
                  open={openModal}
                  onCancel={() => setOpenModal(false)}
                  onSave={() => onEdit()}
                  okText="Atualizar"
                />
              </>
            ),
          },
          {
            key: '2',
            label: (
              <Popconfirm
                onConfirm={onDelete}
                title="Excluir registro"
                description="Você tem certeza que deseja excluir este registro?"
                okText="Sim"
                cancelText="Não"
              >
                <span>
                  <DeleteOutlined
                    style={{ color: '#fd163d', marginRight: '5px' }}
                  />
                  Excluir
                </span>
              </Popconfirm>
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
};

CollumnAction.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  modalContent: PropTypes.node.isRequired,
  modalTitle: PropTypes.string.isRequired,
};

export default CollumnAction;
