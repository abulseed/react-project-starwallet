import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import HomeGrid from './containers/HomeGrid/HomeGrid';
import ProjectsGrid from './containers/ProjectsGrid/ProjectsGrid';
import DataStore from './assets/data/data-store.json';

class App extends Component {
  state = {
    chartLineData: DataStore.chartDataLine,
    chartBarData2018: DataStore.chartDataBar['2018'],
    chartBarData2017: DataStore.chartDataBar['2017'],
    currentBarData: DataStore.chartDataBar['2018'],
    projects: DataStore.projects,
    emails: DataStore.emails,
    date: new Date(),
    selectedYear: '2018'
  }

  dateChangedHandler = date => this.setState({ date })

  emailReadHandler = index => {
    const currentEmails = [...this.state.emails];
    currentEmails[index].read = true;
    this.setState({ emails: currentEmails });
  }

  salesYearSelectedHandler = async (key, event) => {
    console.log(event);
    let tmp = { ...this.state.currentBarData };
    if (key == '2018') {
      tmp = { ...this.state.chartBarData2018 };
    } else if (key == '2017') {
      tmp = { ...this.state.chartBarData2017 };
    }
    await this.setState({ currentBarData: tmp, selectedYear: key });
    console.log(this.state)
  }

  render() {
    return (
      <Layout>
        <HomeGrid
          emails={this.state.emails}
          chartLineData={this.state.chartLineData}
          projects={this.state.projects}
          selectedYear={this.state.selectedYear}
          selected={this.salesYearSelectedHandler}
          clicked={this.emailReadHandler}
          currentBarData={this.state.currentBarData}
          date={this.state.date} />
        {/* <ProjectsGrid projects={this.state.projects} /> */}
      </Layout>
    );
  }
}

export default App;
