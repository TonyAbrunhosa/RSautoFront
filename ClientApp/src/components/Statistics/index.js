/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import CountUp from 'react-countup';
import { Statistic } from 'antd';

import { StatisticWrapper, StatisticSection } from './styles';

const Statistics = ({
  width = '60%',
  showTitle = false,
  showBilling = false,
}) => {
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <StatisticSection>
      {showTitle && <h2>Estatísticas Gerais</h2>}

      <StatisticWrapper width={width}>
        <Statistic
          title="Novos Clientes"
          value={50}
          precision={2}
          formatter={formatter}
        />

        <Statistic
          title="Ordens de Serviço"
          value={300}
          formatter={formatter}
        />

        <Statistic
          title="Entradas de Peças"
          value={150}
          precision={2}
          formatter={formatter}
        />

        <Statistic
          title="Peças no Estoque"
          value={112893}
          precision={2}
          formatter={formatter}
        />

        <Statistic
          title="Entradas de Veículos"
          value={112893}
          precision={2}
          formatter={formatter}
        />

        {showBilling && (
          <Statistic
            title="Faturamento"
            value={60000}
            precision={2}
            formatter={formatter}
          />
        )}
      </StatisticWrapper>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  showTitle: PropTypes.bool,
  showBilling: PropTypes.bool,
  width: PropTypes.string,
};

export default Statistics;
