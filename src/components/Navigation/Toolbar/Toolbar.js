import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import Logo from '../../Logo/Logo';
import RightPanel from './RightPanel/RightPanel';
import { Grid, Row, Col } from 'react-bootstrap';

const Toolbar = (props) => (
  <Grid className="Toolbar">
    <Row>
      <Col md={10}>
        <Logo />
      </Col>
      <Col md={2} >
        <RightPanel />
      </Col>

    </Row>
    {/* <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown> */}
  </Grid>
);

export default Toolbar;