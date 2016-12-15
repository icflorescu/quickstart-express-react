import React from 'react';
import moment from 'moment';

export default ({ reminder, index }) => {
  let containerClassName = 'reminder-list-item mui--clearfix';
  if (index) containerClassName += ' mui--divider-top';
  return (
    <div className={containerClassName}>
      <div className="mui--pull-right">{moment(reminder.when).fromNow()}</div>
      <div>{reminder.title}</div>
    </div>
  );
};
