import React from 'react';
import { Grid, Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';
import BarChart from '../Charts/Bar/BarChart';
import Aux from '../../hoc/Auxiliary/Auxiliary'

const SalesReport = (props) => (
  <Aux>
    <div className='SalesReport'>
      <div style={{ fontWeight: 'bold', fontSize: 'large' }} className='font-white'>
        Sales Report
      </div>
      <div className="text-right">
        <DropdownButton
          onSelect={props.selected}
          bsStyle="default"
          title={props.title}
          id='dropdown-basic-sales-year'>
          <MenuItem eventKey="2018">2018</MenuItem>
          <MenuItem eventKey="2017">2017</MenuItem>
        </DropdownButton>
      </div>
    </div>
    <BarChart chartData={props.chartBarData} />
  </Aux>
);

export default SalesReport;