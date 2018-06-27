import React from 'react';
import { Image } from 'react-bootstrap';

import MoreImage from '../../assets/images/More.png';
import Persona from '../../assets/images/personas/p2.png';
import ProjectDetails from './Details/ProjectDetails';
import withListGroup from '../../hoc/withList/withListGroup';

const ProjectBar = (props) => (
  <div className="ProjectBar">
    <div className='ProjectSection text-left'>
      <Image src={Persona} alt="Persona" className="PersonaIcon" />
    </div>
    <div className='ProjectSection'>
      <ProjectDetails title={props.title} by={props.by} price={props.price} />
    </div>
    <div className='ProjectSection text-right'>
      <Image src={MoreImage} alt="More" />
    </div>
  </div>
);

export default withListGroup(ProjectBar);