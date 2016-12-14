import React from 'react';
import moment from 'moment';

export default ({ reminder }) => (
  <div className="mui-panel">
    <div>{reminder.title}</div>
    <div>{moment(reminder.when).fromNow()}</div>
  </div>
);
