import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { Card, Col, Row } from 'antd';

import Statistics from '~/components/Statistics';

import orderImg from '~/assets/images/order.png';
import suppliersImg from '~/assets/images/suppliers.png';
import supplierImg from '~/assets/images/supplier.png';
import carImg from '~/assets/images/car.png';
import carsImg from '~/assets/images/cars.png';
import partImg from '~/assets/images/part.png';
import partsImg from '~/assets/images/parts.png';

import { Container } from './styles';

const cardRows = [
  {
    cards: [
      {
        image: orderImg,
        title: 'Gerenciar ordens de serviço',
        link: '/ordens',
        description: 'Cadastre, emita, visualize e imprima ordens de serviço.',
      },
      {
        image: carImg,
        title: 'Cadastrar veículo',
        link: '/cadastrar-veiculo',
        description: 'Cadastre um veículo para um cliente.',
      },
      {
        image: partImg,
        title: 'Cadastrar peça',
        link: '/cadastrar-peca',
        description: 'Realize o cadastro de uma nova peça.',
      },
      {
        image: supplierImg,
        title: 'Cadastrar fornecedor',
        link: '/cadastrar-fornecedor',
        description: 'Cadastre um novo fornecedor.',
      },
    ],
  },
  {
    cards: [
      {
        image: partsImg,
        title: 'Visualizar peças cadastradas',
        link: '/pecas',
        description: 'Visualize todas as peças cadastradas.',
      },
      {
        image: carsImg,
        title: 'Visualizar veículos cadastrados',
        link: '/veiculos',
        description: 'Visualize todas as entradas de veículos.',
      },
      {
        image: suppliersImg,
        title: 'Visualizar fornecedores cadastrados',
        link: '/fornecedores',
        description: 'Visualize todos os fornecedores.',
      },
    ],
  },
];

const Home = () => {
  return (
    <Container>
      <section>
        <h2>Estatísticas Gerais deste mês</h2>
        <Statistics width="80%" />
      </section>
      <section>
        <h2>Ações Rápidas</h2>
        <div>
          {cardRows.map(({ cards }) => (
            <Row gutter={12} style={{ marginTop: 10 }}>
              {cards.map(({ title, link, description, image }) => (
                <Col span={6}>
                  <Link to={link}>
                    <Card
                      style={{
                        boxShadow: '2px 3px 4px -1px #807878',
                        height: 165,
                      }}
                      cover={
                        image ? (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignContent: 'center',
                              padding: 8,
                            }}
                          >
                            <div
                              style={{
                                backgroundImage: `url(${image})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                height: 50,
                                width: 50,
                                backgroundPosition: 'center',
                              }}
                            />
                          </div>
                        ) : undefined
                      }
                      size="small"
                      bordered={false}
                    >
                      <Card.Meta title={title} description={description} />
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Home;
