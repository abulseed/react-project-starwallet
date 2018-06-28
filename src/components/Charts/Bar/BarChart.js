import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  state = {
    dataObject: {
      "labels": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ],
      "datasets": [
        {
          "data": [],
          "backgroundColor": [
            "rgba(96, 123, 255,0.2)",
            "rgba(96, 123, 255,0.2)",
            "rgba(96, 123, 255,0.2)",
            "rgba(96, 123, 255,0.2)",
            "rgba(96, 123, 255,0.2)",
            "rgba(96, 123, 255,0.2)",
            "rgba(96, 123, 255,0.2)",
            "rgba(96, 123, 255,0.2)",
            "rgba(96, 123, 255,0.2)",
            "rgba(96, 123, 255,0.2)",
            "rgba(96, 123, 255,0.2)",
            "rgba(96, 123, 255,0.2)"
          ],
          "borderColor": [
            "rgba(96, 123, 255,1)",
            "rgba(96, 123, 255,1)",
            "rgba(96, 123, 255,1)",
            "rgba(96, 123, 255,1)",
            "rgba(96, 123, 255,1)",
            "rgba(96, 123, 255,1)",
            "rgba(96, 123, 255,1)",
            "rgba(96, 123, 255,1)",
            "rgba(96, 123, 255,1)",
            "rgba(96, 123, 255,1)",
            "rgba(96, 123, 255,1)",
            "rgba(96, 123, 255,1)"
          ],
          "borderWidth": 1
        }
      ]
    }
  }
  render() {
    this.state.dataObject.datasets[0].data = this.props.chartData;
    return (
      <Bar data={this.state.dataObject} options={{
        legend: {
          display: false
        }
      }} />
    );
  }

}

export default BarChart;