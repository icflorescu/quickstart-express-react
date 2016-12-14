import moment from 'moment';

import db from '../utils/db';

const reminders = db.get('reminders');
reminders.remove().value();
reminders.insert({
  title: 'Feed Tiger',
  body: `Don't forget to feed the cat.`,
  when: moment().add(8, 'days').add(2, 'hours').toDate(),
  createdAt: new Date
}).value();
reminders.insert({
  title: 'Buy groceries',
  body: '...and whatever else is necessary...',
  when: moment().add(4, 'days').add(12, 'hours').toDate(),
  createdAt: new Date
}).value();
