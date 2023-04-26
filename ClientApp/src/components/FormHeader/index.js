import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { Wrapper, ButtonsSection } from './styles';

const FormHeader = ({ title, buttons }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <ButtonsSection>
        {buttons.map(
          ({
            name,
            type = 'primary',
            size = 'middle',
            onClick = () => {},
            loading = false,
            disabled = false,
            icon,
          }) => (
            <Button
              type={type}
              loading={loading}
              onClick={onClick}
              icon={icon}
              disabled={disabled}
              size={size}
            >
              {name}
            </Button>
          )
        )}
      </ButtonsSection>
    </Wrapper>
  );
};

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.array.isRequired,
};

export default FormHeader;
