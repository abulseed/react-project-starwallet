import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Image from 'react-bootstrap/lib/Image';

import HomeImage from '../../../assets/images/Home.png';
import MenuImage from '../../../assets/images/Menu.png';
import StatsImage from '../../../assets/images/Stats.png';

const SideDrawer = () => (
  <Nav bsStyle="pills" stacked className="SideDrawer">
    <NavItem eventKey={1} href="#home" className='NavItem'>
      <Image src={HomeImage} />
    </NavItem>
    <NavItem eventKey={2} href="#menu" className='NavItem'>
      <Image src={MenuImage} />
    </NavItem>
    <NavItem eventKey={3} href="#stats" className='NavItem'>
      <Image src={StatsImage} />
    </NavItem>
  </Nav>
);

export default SideDrawer;