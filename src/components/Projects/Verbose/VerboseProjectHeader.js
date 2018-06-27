import React from 'react';

const VerboseProjectHeader = (props) => (
  <div className='VerboseProjectHeader' onClick={props.clicked}>
    <div className='VerboseItem'>
      Project title
    </div>
    <div className='VerboseItem'>
      Value
    </div>
    <div className='VerboseItem'>
      Deadline
    </div>
    <div className='VerboseItem'>
      Time Spent
    </div>
    <div className='VerboseItem'>
      Progress
    </div>
    <div className='VerboseItem'>
      Status
    </div>
    <div className='VerboseItem'>
      Assigned to
    </div>
    <div className='VerboseItem'>
    </div>
  </div>
);

export default VerboseProjectHeader;