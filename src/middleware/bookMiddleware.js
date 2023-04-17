import axios from 'axios';
import {
  addBooksInApp, GET_BOOKS_FROM_API,
} from '../actions/book';

const bookMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware, on a reçu une action', action);

  switch (action.type) {
    case GET_BOOKS_FROM_API:
      axios.get(
        // URL
        'http://sandy-bouzid.vpnuser.lan:8000/api/books',
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(addBooksInApp(response.data));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });

      break;
    default:
  }
  next(action);
};

export default bookMiddleware;
