import React from 'react';
import { ProgressBar, Image } from 'react-bootstrap';
import withList from '../../../hoc/withList/withList';

import Persona from '../../../assets/images/personas/p2.png';
import MoreImage from '../../../assets/images/More.png';

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
    <div style={barBorderStyle} className='VerboseProjectBar'>
      <div className='VerboseItem'>
        <div>{props.title}</div>
        <div>{props.by}</div>
      </div>
      <div className='VerboseItem'>
        {props.price}
      </div>
      <div className='VerboseItem'>
        {props.deadline}
      </div>
      <div className='VerboseItem'>
        {`${props.spentHours} ${props.spentHours === "1" ? 'hour' : 'hours'}`}
      </div>
      <div className='VerboseItem'>
        {props.progress * 100}%<ProgressBar bsStyle={bsStyle} now={props.progress * 100} style={{ width: '150px', height: '5px', marginTop: '15px', marginLeft: '5px' }} />
      </div>
      <div className='VerboseItem'>
        {props.status}
      </div>
      <div className='VerboseItem'>
        <Image src={Persona} alt="Persona" className="PersonaIcon" />
        <div>
          <div>{props.assignedTo.name}</div>
          <div>{props.assignedTo.role}</div>
        </div>
      </div>
      <div className='VerboseItem'>
        <Image src={MoreImage} alt="More" />
      </div>
    </div>
  );
}

export default withList(VerboseProjectBar);