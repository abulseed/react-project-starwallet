import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const MainHeadline = (props) => {
  return (
    <div className='noPadding MainHeadline'>
      <div style={{ fontWeight: 'bold' }} className="text-left">
        All Projects({props.projects.length})
    </div>
      <div className="text-left">
        Workflow
    </div>
      <div className='ShowSection'>
        <div style={{ marginTop: '6px', marginRight: '3px' }}>Show projects:</div>
        <DropdownButton
          onSelect={props.selected}
          bsStyle="default"
          title={props.show}
          id='dropdown-basic-show-proj'>
          {props.projects.reduce((acc, proj, index) => {
            const status = proj.status;
            if (!acc.includes(status)) {
              acc.push(status);
            }
            return acc;
          }, []).map((status, index) => {
            return <MenuItem key={index} eventKey={status}>{status}</MenuItem>;
          })}
        </DropdownButton>
      </div>
    </div>
  );
}

export default MainHeadline;