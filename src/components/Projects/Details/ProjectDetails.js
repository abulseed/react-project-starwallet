import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const title = {
  fontSize: 'x-small'
}
const ProjectDetails = (props) => (
  <Grid fluid>
    <Row>
      <Col md={12} style={title}>
        <p><strong>{props.title}</strong></p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <p><small>{props.by}</small></p>
      </Col>
      <Col md={6}>
        <p><small>{props.price}</small></p>
      </Col>
    </Row>
  </Grid>
);

export default ProjectDetails;