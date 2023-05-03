import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { CheckOutlined, LeftOutlined } from '@ant-design/icons';
import { Wrapper, ButtonsSection } from './styles';

const FormHeader = ({ title, goBackOnClick, saveOnClick }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <ButtonsSection>
        <Button
          type="dashed"
          onClick={goBackOnClick}
          icon={<LeftOutlined />}
          size="large"
        >
          Voltar
        </Button>
        <Button
          type="primary"
          onClick={saveOnClick}
          icon={<CheckOutlined />}
          size="large"
        >
          Salvar
        </Button>
      </ButtonsSection>
    </Wrapper>
  );
};

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  goBackOnClick: PropTypes.func.isRequired,
  saveOnClick: PropTypes.func.isRequired,
};

export default FormHeader;
