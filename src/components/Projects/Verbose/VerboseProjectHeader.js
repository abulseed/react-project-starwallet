import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const VerboseProjectHeader = () => (
  <Grid className='VerboseProjectHeader' fluid>
    <Row>
      <Col md={2}>
        <p><small><strong>Project title</strong></small></p>
      </Col>
      <Col md={1}>
        <p><small><strong>Value</strong></small></p>
      </Col>
      <Col md={1}>
        <p><small><strong>Deadline</strong></small></p>
      </Col>
      <Col md={1}>
        <p><small><strong>Time Spent</strong></small></p>
      </Col>
      <Col md={2}>
        <p><small><strong>Progress</strong></small></p>
      </Col>
      <Col md={1}>
        <p><small><strong>Status</strong></small></p>
      </Col>
      <Col md={3}>
        <p><small><strong>Assigned to</strong></small></p>
      </Col>
      <Col md={1}>
        <p><small><strong>Assigned to</strong></small></p>
      </Col>
    </Row>
  </Grid>
);

export default VerboseProjectHeader;