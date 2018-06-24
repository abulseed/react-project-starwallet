import React from 'react';
import EmailDetails from './Details/EmailDetails';
import Persona from '../../assets/images/personas/p2.png';
import withListGroup from '../../hoc/withList/withListGroup';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const EmailBar = (props) => (
  <Grid fluid>
    <Row>
      <Col md={5} className='text-center'>
        <Image src={Persona} alt="Persona" className="PersonaIcon" />
      </Col>
      <Col md={7}>
        <EmailDetails from={props.from} date={props.date} brief={props.brief} read={props.read} clicked={() => props.clicked(props.id)} />
      </Col>
    </Row>
  </Grid>
);

export default withListGroup(EmailBar);