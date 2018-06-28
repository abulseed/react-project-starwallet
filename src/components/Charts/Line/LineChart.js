import React from 'react';
import { Line } from 'react-chartjs-2';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import DoughnutChart from '../Doughnut/Doughnut';

const LineChart = (props) => (
  <Aux>
    <div className='DoughnutPanel'>
      <DoughnutChart data={[25, 75]} labels={['none', 'views']} />
      <DoughnutChart data={[65, 35]} labels={['none', 'visitors']} />
      <DoughnutChart data={[38, 62]} labels={['none', 'impressions']} />
    </div>
    <Line data={props.chartData} options={{
      legend: {
        display: false
      }
    }} />
  </Aux>
);

export default LineChart;