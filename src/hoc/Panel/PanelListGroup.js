import React from 'react';
import { Panel, ListGroup } from 'react-bootstrap';
import Aux from '../Auxiliary/Auxiliary';

const widthFull = {
  width: '100%',
  height: '64px'
}
const PanelListGroup = (props) => (
  <Aux>
    <div
      style={widthFull}
      className={`${props.headerStyle} text-center PanelListGroupHead`}>
      {props.heading}
    </div>
    <ListGroup style={props.overflow} >
      {props.children}
    </ListGroup>
  </Aux>
);

export default PanelListGroup;