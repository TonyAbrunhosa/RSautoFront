import React from 'react';
import { Dropdown, Button } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CollumnAction = () => (
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

export default CollumnAction;
