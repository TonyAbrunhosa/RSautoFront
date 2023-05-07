import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Statistics from '~/components/Statistics';
import { Wrapper } from './styles';

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

const Metrics = () => {
  return (
    <Wrapper>
      <div>
        <HighchartsReact highcharts={Highcharts} options={getOptions('line')} />
        <Statistics showTitle showBilling width='80%'/>
      </div>
    </Wrapper>
  );
};

export default Metrics;
