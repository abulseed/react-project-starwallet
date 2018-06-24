import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const EmailDetails = (props) => {
  const fromFont = {
    fontSize: 'x-small'
  }
  const readStyle = {
    color: 'Grey'
  }
  if (!props.read) {
    readStyle.color = 'cornflowerblue';
    readStyle.fontWeight = 'bold';
  }
  return (
    <Grid onClick={props.clicked} fluid>
      <Row>
        <Col md={6} style={fromFont}>
          <p><strong>{props.from}</strong></p>
        </Col>
        <Col md={6} className="text-right">
          <p><span style={readStyle}><small>{props.date}</small></span></p>
        </Col>
      </Row>
      <Row>
        <Col md={12} >
          <p><small>{props.brief}</small></p>
        </Col>
      </Row>
    </Grid>
  )
};

export default EmailDetails;