import React from 'react';

import Logo from '../../Logo/Logo';
import RightPanel from './RightPanel/RightPanel';

const Toolbar = (props) => (
  <div className="Toolbar">
    {/* <Row> */}
    <div>
      <Logo />
    </div>
    <div>
      <RightPanel />
    </div>

    {/* </Row> */}
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
  </div>
);

export default Toolbar;