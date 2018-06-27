import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Image from 'react-bootstrap/lib/Image';

import HomeImage from '../../../assets/images/Home.png';
import MenuImage from '../../../assets/images/Menu.png';
import StatsImage from '../../../assets/images/Stats.png';
import { withRouter } from 'react-router-dom';

class SideDrawer extends Component {

  goToHomeHandler = () => {
    this.props.history.push('/');
  }

  goToProjectsHandler = () => {
    this.props.history.push('/projects');
  }

  render() {
    return (
      <div className="SideDrawer">
        <ul className='NavigationItems'>
          <li className='NavigationItem' onClick={this.goToHomeHandler}>
            <a>
              <Image src={HomeImage} />
            </a>
          </li>
          <li className='NavigationItem' onClick={this.goToProjectsHandler}>
            <a>
              <Image src={MenuImage} />
            </a>
          </li>
          <li className='NavigationItem'>
            <a>
              <Image src={StatsImage} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(SideDrawer);