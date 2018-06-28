import { Doughnut } from 'react-chartjs-2';

import React, { Component } from 'react';

class DoughnutChart extends Component {
  state = {
    data: {
      datasets: [{
        data: [],
        backgroundColor: [
          "rgba(23, 24, 32, 0.2)",
          "rgba(96, 123, 255, 0.2)",
        ],
        borderColor: [
          "rgba(23, 24, 32, 1)",
          "rgba(96, 123, 255, 1)",
        ]
      }],
      labels: []
    }
  }

  render() {
    this.state.data.datasets[0].data = this.props.data;
    this.state.data.labels = this.props.labels;

    return (
      <div style={{ width: '100%', height: '100px' }}>
        <Doughnut width={100} height={100} data={this.state.data} options={{
          legend: {
            display: false
          },
          maintainAspectRatio: false
        }} />
      </div>
    );
  }
}

export default DoughnutChart;