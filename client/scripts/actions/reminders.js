import axios from 'axios';

export const LOAD_REMINDERS       = 'LOAD_REMINDERS';
export const LOAD_REMINDERS_ERROR = 'LOAD_REMINDERS_ERROR';

export function loadReminders() {
  return {
    type: LOAD_REMINDERS,
    payload: axios.get('/api/reminders')
  }
}
