/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'antd';

const FormModal = ({
  content,
  title,
  open,
  onCancel,
  onSave,
  okText = 'Cadastrar',
}) => {
  return (
    <Modal
      destroyOnClose
      title={title}
      open={open}
      centered
      onOk={() => onSave()}
      onCancel={() => onCancel()}
      width="75%"
      okText={okText}
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
        {content}
      </div>
    </Modal>
  );
};

FormModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  okText: PropTypes.string,
};

export default FormModal;
