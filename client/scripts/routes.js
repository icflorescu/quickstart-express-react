import React from 'react';
import Route from 'react-router/lib/Route'; // import separately to reduce bundle size
import IndexRoute from 'react-router/lib/IndexRoute'; // import separately to reduce bundle size

import App from './components/App';
import ReminderList from './components/ReminderList';

export default (
  <Route path="/app" component={App}>
    <IndexRoute component={ReminderList} />
  </Route>
);
