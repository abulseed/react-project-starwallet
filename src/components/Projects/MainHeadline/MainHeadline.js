import React from 'react';
import { Grid, Row, DropdownButton, MenuItem, Col } from 'react-bootstrap';

const MainHeadline = (props) => (
  <Grid className='noPadding' fluid>
    <Row className='vertical-align'>
      <Col md={2} className="text-left vcenter">
        <p><strong>All Projects({props.projects.length})</strong></p>
      </Col>
      <Col md={4} className="text-left">
        <p>Workflow</p>
      </Col>
      <Col md={5} className="text-right">
        <p>Show projects:</p>
      </Col>
      <Col md={1} className="text-right">
        <DropdownButton
          onSelect={props.selected}
          bsStyle="default"
          title="Show"
          id='dropdown-basic-show-proj'>
          {props.projects.map((proj, index) => <MenuItem key={index} eventKey={index}>{proj.title}</MenuItem>)}
        </DropdownButton>
      </Col>
    </Row>
  </Grid>
);

export default MainHeadline;