import React from 'react';
import EmailDetails from './Details/EmailDetails';
import Persona from '../../assets/images/personas/p2.png';
import withListGroup from '../../hoc/withList/withListGroup';
import { Image } from 'react-bootstrap';

const EmailBar = (props) => (
  <div className='EmailBar'>
    <div className='text-center'>
      <Image src={Persona} alt="Persona" className="PersonaIcon" />
    </div>
    <div>
      <EmailDetails from={props.from} date={props.date} brief={props.brief} read={props.read} clicked={() => props.clicked(props.id)} />
    </div>
  </div>
);

export default withListGroup(EmailBar);