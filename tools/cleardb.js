import db from '../utils/db';
db.get('reminders').remove().value();
