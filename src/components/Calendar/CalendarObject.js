import React from 'react';
import Calendar from 'react-calendar';

const CalendarObject = (props) => (
  <Calendar
    onChange={props.onChange}
    value={props.date}
  />
);

export default CalendarObject;