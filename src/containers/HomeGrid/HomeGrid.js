import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LineChart from '../../components/Charts/Line/LineChart';
import CalendarObject from '../../components/Calendar/CalendarObject';
import PanelListGroup from '../../hoc/Panel/PanelListGroup';
import ProjectBar from '../../components/Projects/ProjectBar';
import EmailBar from '../../components/Email/EmailBar';
import SalesReport from '../../components/SalesReport/SalesReport';

class HomeGrid extends Component {

  render() {
    const overflow = {
      overflow: 'scroll',
      height: '100%',
      color: 'white',
      fontSize: 'xx-small'
    }

    const upperRow = {
      maxHeight: '60%',
    }
    const lowerRow = {
      maxHeight: '40%',
    }
    const unreadEmails = this.props.emails.filter(email => !email.read).length;
    let emailHeading = <p>Inbox</p>;
    if (unreadEmails > 0) {
      const unreadStyle = {
        color: 'cornflowerblue'
      }
      emailHeading = <p>Inbox(<span style={unreadStyle}>{unreadEmails}</span>)</p>
    }
    return (
      <Grid fluid >
        <Row style={upperRow}>
          <Col md={9}>
            <LineChart chartData={this.props.chartLineData} />
          </Col>
          <Col md={3}>
            <PanelListGroup headerStyle='HomeCardHeader' overflow={overflow} heading="Your Projects">
              <ProjectBar list={this.props.projects} />
            </PanelListGroup>
          </Col>
        </Row>
        <Row style={lowerRow}>
          <Col md={6}>
            <SalesReport title={this.props.selectedYear} selected={this.props.selected} chartBarData={this.props.currentBarData} />
          </Col>
          <Col md={3}>
            <PanelListGroup headerStyle='HomeCardHeader' overflow={overflow} heading={emailHeading}>
              <EmailBar list={this.props.emails} clicked={this.props.clicked} />
            </PanelListGroup>
          </Col>
          <Col md={3}>
            <CalendarObject onChange={this.dateChangedHandler} date={this.props.date} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default HomeGrid;