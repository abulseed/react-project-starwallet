import React from 'react';

const title = {
  fontSize: 'x-small'
}
const ProjectDetails = (props) => (
  <div className='ProjectDetails'>
    <div style={{ ...title, fontWeight: 'bold' }}>
      {props.title}
    </div>
    <div>
      {props.by}
    </div>
    <div>
      {props.price}
    </div>
  </div>
);

export default ProjectDetails;