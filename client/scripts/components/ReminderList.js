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
    return this.props.reminders.map(item => <ReminderListItem key={item.id} reminder={item} />);
  }

  render() {
    return (
      <div>
        {this.renderItems()}
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
