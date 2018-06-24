import React from 'react';

import Image from 'react-bootstrap/lib/Image';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import SearchImage from '../../../../assets/images/Search.png';
import Persona from '../../../../assets/images/personas/p1.png';
import ArrowImage from '../../../../assets/images/Arrow.png';

const noPadding = {
  padding: '0',
  margin: '0'
}

const RightPanel = () => (
  <Grid fluid className="RightPanel">
    <Row>
      <Col md={3} className="text-right" style={noPadding}>
        <Image src={SearchImage} />
      </Col>
      <Col md={3} className="text-center" style={noPadding}>
        <Image src={Persona} rounded />
      </Col>
      <Col md={6} className="text-left" style={noPadding}>
        <Image src={ArrowImage} />
      </Col>
    </Row>
  </Grid>
);

export default RightPanel;