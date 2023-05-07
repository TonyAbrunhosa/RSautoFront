import React, { useState } from 'react';
import { Button, Steps } from 'antd';
import { CheckOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Container, ContentWrapper, Content } from './styles';

const steps = [
  {
    title: 'Primeira Etapa',
    content: 'Primeira Etapa',
  },
  {
    title: 'Segunda Etapa',
    content: 'Segunda Etapa',
  },
  {
    title: 'Última Etapa',
    content: 'Última Etapa',
  },
];

const ServiceOrder = () => {
  const [current, setCurrent] = useState(0);
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const next = () => setCurrent(current + 1);

  const prev = () => setCurrent(current - 1);

  return (
    <Container>
      <h2>Emitir Ordem de Serviço</h2>

      <ContentWrapper>
        <Steps current={current} items={items} />
        <Content>{steps[current].content}</Content>
        <div>
          {current > 0 && (
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => prev()}
              icon={<LeftOutlined />}
            >
              Voltar
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button
              icon={<RightOutlined />}
              type="primary"
              onClick={() => next()}
            >
              Próximo
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button icon={<CheckOutlined />} type="primary" onClick={() => {}}>
              Emitir
            </Button>
          )}
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default ServiceOrder;
