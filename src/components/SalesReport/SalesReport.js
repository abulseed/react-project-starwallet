import React from 'react';
import { Grid, Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';
import BarChart from '../Charts/Bar/BarChart';

const SalesReport = (props) => (
  <Grid fluid>
    <Row>
      <Col md={6} className='font-white'>
        <h3><strong>Sales Report</strong></h3>
      </Col>
      <Col md={6} className="text-right">
        <DropdownButton
          onSelect={props.selected}
          bsStyle="default"
          title={props.title}
          id='dropdown-basic-sales-year'>
          <MenuItem eventKey="2018">2018</MenuItem>
          <MenuItem eventKey="2017">2017</MenuItem>
        </DropdownButton>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <BarChart chartData={props.chartBarData} />
      </Col>
    </Row>
  </Grid>
);

export default SalesReport;