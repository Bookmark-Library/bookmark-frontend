import { combineReducers } from 'redux';

import bookReducer from './book';
import userReducer from './user';

const rootReducer = combineReducers({
  book: bookReducer,
  user: userReducer,
});

export default rootReducer;
