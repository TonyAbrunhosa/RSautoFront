import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Button, Popconfirm } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CollumnAction = ({ onDelete = () => {} }) => (
  <Dropdown
    menu={{
      items: [
        {
          key: '1',
          label: (
            <span>
              <EditOutlined style={{ color: '#1099d7', marginRight: '5px' }} />
              Editar
            </span>
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

CollumnAction.propTypes = {
  onDelete: PropTypes.func,
};

export default CollumnAction;
