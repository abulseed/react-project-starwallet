import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import HomeGrid from './containers/HomeGrid/HomeGrid';
import ProjectsGrid from './containers/ProjectsGrid/ProjectsGrid';
import DataStore from './assets/data/data-store.json';

class App extends Component {
  state = {
    chartLineData: DataStore.chartDataLine,
    chartBarData2018: [
      10,
      15,
      20,
      5,
      25,
      30,
      12,
      8,
      26,
      23,
      14,
      3
    ],
    chartBarData2017: [
      2,
      11,
      21,
      50,
      20,
      30,
      42,
      38,
      26,
      3,
      24,
      33
    ],
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
    await this.setState({ selectedYear: key });
  }

  render() {
    let barChart = {};
    if (this.state.selectedYear === '2018') {
      barChart = this.state.chartBarData2018;
    }

    if (this.state.selectedYear === '2017') {
      barChart = this.state.chartBarData2017;
    }

    return (
      <Layout>
        <Switch>
          <Route path='/projects' render={
            props => (
              <ProjectsGrid {...props} projects={this.state.projects} />
            )
          } />
          <Route path='/' exact
            render={
              props => (
                <HomeGrid
                  {...props}
                  emails={this.state.emails}
                  chartLineData={this.state.chartLineData}
                  projects={this.state.projects}
                  selectedYear={this.state.selectedYear}
                  selected={this.salesYearSelectedHandler}
                  clicked={this.emailReadHandler}
                  currentBarData={barChart}
                  date={this.state.date} />
              )
            } />
        </Switch>
      </Layout>
    );
  }
}

export default App;
