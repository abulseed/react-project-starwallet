import React from 'react';

const DoughnutLegend = (props) => {
  return (
    <div>
      <div>
        {props.value}
      </div>
      <div>
        {props.text}
      </div>
    </div>
  );
};

export default DoughnutLegend;