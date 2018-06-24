import React from 'react';
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';
import withList from '../../../hoc/withList/withList';

const VerboseProjectBar = (props) => {
  let bsStyle = "info";
  let barBorderStyle = {
    borderLeft: '4px solid cornflowerblue',
    paddingLeft: '5px',
    height: '64px'
  }
  if (props.progress === "1") {
    bsStyle = "success";
    barBorderStyle.borderLeft = '4px solid green'
  }
  if (props.progress === "0") {
    barBorderStyle.borderLeft = '4px solid white'
  }

  return (
    <Grid style={barBorderStyle} className='noPadding VerboseProjectBar' fluid>
      <Row>
        <Col md={2}>
          <Grid className='noPadding' fluid>
            <Row className='noPadding'>
              <Col className='noPadding'>
                <p><small>{props.title}</small></p>
              </Col>
            </Row>
            <Row className='noPadding'>
              <Col className='noPadding'>
                <p><small>{props.by}</small></p>
              </Col>
            </Row>
          </Grid>
        </Col>
        <Col md={1}>
          <p><small>{props.price}</small></p>
        </Col>
        <Col md={1}>
          <p><small>{props.deadline}</small></p>
        </Col>
        <Col md={1}>
          <p><small>{`${props.spentHours} ${props.spentHours === "1" ? 'hour' : 'hours'}`}</small></p>
        </Col>
        <Col md={2}>
          <ProgressBar bsStyle={bsStyle} now={props.progress * 100} />
        </Col>
        <Col md={1}>
          <p><small>Status</small></p>
        </Col>
        <Col md={3}>
          <p><small>Assigned to</small></p>
        </Col>
        <Col md={1}>
          <p><small>Assigned to</small></p>
        </Col>
      </Row>
    </Grid>
  );
}

export default withList(VerboseProjectBar);