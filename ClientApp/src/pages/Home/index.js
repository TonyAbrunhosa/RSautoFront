import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import CountUp from 'react-countup';

import { Statistic } from 'antd';

import { Wrapper, StatisticWrapper, StatisticSection } from './styles';

const getOptions = (type) => ({
  chart: {
    plotBackgroundColor: '#ffff',
    plotShadow: false,
    backgroundColor: '#ffff',
    borderRadius: 12,
    type,
    width: 950,
    height: 400,
    shadow: true,
  },
  plotOptions: {
    line: {
      color: '',
    },
  },
  title: {
    text: 'Faturamentos',
    align: 'left',
    style: {
      color: '#363636',
      fontFamily: 'Roboto',
      fontSize: '22px',
    },
  },
  yAxis: {
    title: {
      text: '',
      style: {
        fontFamily: 'Roboto',
      },
    },
  },
  xAxis: {
    type: 'category',
  },
  series: [
    {
      name: 'Faturamento',
      data: [
        {
          name: '2018',
          y: 10000,
          drilldown: '2018',
        },
        {
          name: '2019',
          y: 22000,
          drilldown: '2019',
        },
        {
          name: '2020',
          y: 25000,
          drilldown: '2020',
          fontSize: '18px',
        },
        {
          name: '2021',
          y: 33000,
          drilldown: '2021',
        },
        {
          name: '2022',
          y: 48000,
          drilldown: '2022',
        },
        {
          name: '2023',
          y: 65000,
          drilldown: '2023',
        },
      ],
    },
  ],
  legend: {
    enabled: false,
  },
});

const Home = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <Wrapper>
      <div>
        <HighchartsReact highcharts={Highcharts} options={getOptions('line')} />
        <StatisticSection>
          <h2>Estatísticas de Março</h2>
          <StatisticWrapper>
            <Statistic
              title="Notas emitidas"
              value={300}
              formatter={formatter}
            />
            <Statistic
              title="Total de peças no estoque"
              value={112893}
              precision={2}
              formatter={formatter}
            />
            <Statistic
              title="Peças salvas"
              value={112893}
              precision={2}
              formatter={formatter}
            />
            <Statistic
              title="Veículos salvos"
              value={112893}
              precision={2}
              formatter={formatter}
            />
          </StatisticWrapper>
        </StatisticSection>
      </div>
    </Wrapper>
  );
};

export default Home;
