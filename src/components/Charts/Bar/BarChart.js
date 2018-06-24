import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => (
  <Bar data={props.chartData} options={{
    legend: {
      display: false
    }
  }} />
);

export default BarChart;