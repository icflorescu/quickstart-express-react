import moment from 'moment';

import db from '../utils/db';

const reminders = db.get('reminders');
reminders.remove().value();
reminders.insert({
  title: 'Feed Tiger',
  body: `Don't forget to feed the cat.`,
  when: moment().add(2, 'hours').toDate(),
  createdAt: new Date
}).value();
reminders.insert({
  title: 'Buy a new phone',
  body: 'Go get a new phone, since the old one could explode at any time...',
  when: moment().add(4, 'days').add(12, 'hours').toDate(),
  createdAt: new Date
}).value();
reminders.insert({
  title: 'Pay rent',
  body: `Next week, don't foreget to pay the rent.`,
  when: moment().add(5, 'days').add(3, 'hours').toDate(),
  createdAt: new Date
}).value();
