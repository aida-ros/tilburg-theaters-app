import { combineReducers } from 'redux';
import events from './events';
import pagination from './pagination';

const reducer = combineReducers({
  events,
  pagination
})

export default reducer;