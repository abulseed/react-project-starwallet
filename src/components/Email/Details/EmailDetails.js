import React from 'react';

const EmailDetails = (props) => {
  const fromFont = {
    fontSize: 'x-small'
  }
  const readStyle = {
    color: 'Grey'
  }
  if (!props.read) {
    readStyle.color = 'cornflowerblue';
    readStyle.fontWeight = 'bold';
  }
  return (
    <div onClick={props.clicked} className='EmailDetails'>
      <div style={fromFont}>
        <div style={{ fontWeight: 'bold' }}>{props.from}</div>
      </div>
      <div className="text-right">
        <div style={readStyle}>{props.date}</div>
      </div>
      <div>
        <div>{props.brief}</div>
      </div>
    </div>
  )
};

export default EmailDetails;