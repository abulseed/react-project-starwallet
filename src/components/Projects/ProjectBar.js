import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import MoreImage from '../../assets/images/More.png';
import Persona from '../../assets/images/personas/p2.png';
import ProjectDetails from './Details/ProjectDetails';
import withListGroup from '../../hoc/withList/withListGroup';

const ProjectBar = (props) => (
  <Grid fluid className="border-none noPadding">
    <Row>
      <Col md={3}>
        <Image src={Persona} alt="Persona" className="PersonaIcon" />
      </Col>
      <Col md={6}>
        <ProjectDetails title={props.title} by={props.by} price={props.price} />
      </Col>
      <Col md={3}>
        <Image src={MoreImage} alt="More" />
      </Col>
    </Row>
  </Grid>
);

export default withListGroup(ProjectBar);