import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadReminders } from '../actions/reminders';
import ReminderListItem from './ReminderListItem';

class ReminderList extends Component {
  componentWillMount() {
    this.props.loadReminders();
  }

  renderItems() {
    return this.props.reminders.map(
      (item, index) => <ReminderListItem key={item.id} reminder={item} index={index} />
    );
  }

  render() {
    return (
      <div className="mui-container">
        <div className="mui--z1">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ reminders }) {
  return { reminders };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadReminders }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderList);
