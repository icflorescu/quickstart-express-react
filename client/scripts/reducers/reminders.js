import { LOAD_REMINDERS } from '../actions/reminders';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_REMINDERS:
      return action.payload.data;
    default:
      return state;
  }
};
