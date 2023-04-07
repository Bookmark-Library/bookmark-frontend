import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import bookMiddleware from '../middleware/bookMiddleware';
import usersMiddleware from '../middleware/usersMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    bookMiddleware,
    usersMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
