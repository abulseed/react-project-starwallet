import React from 'react';
import { Line } from 'react-chartjs-2';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import DoughnutChart from '../Doughnut/Doughnut';
import DoughnutLegend from '../Doughnut/Legend/DoughnutLegend';

const LineChart = (props) => (
  <Aux>
    <div className='DoughnutPanel'>
      <DoughnutChart data={[25, 75]} labels={['none', 'views']} />
      <DoughnutLegend value='1 300' text='Views' />
      <DoughnutChart data={[65, 35]} labels={['none', 'visitors']} />
      <DoughnutLegend value='800' text='Visitors' />
      <DoughnutChart data={[38, 62]} labels={['none', 'impressions']} />
      <DoughnutLegend value='3 800' text='Impressions' />
    </div>
    <Line data={props.chartData} options={{
      legend: {
        display: false
      }
    }} />
  </Aux>
);

export default LineChart;