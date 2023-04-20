import axios from 'axios';
import {
  addBooksInApp, GET_BOOKS_FROM_API, removeInput, SEND_BOOK_CREATE_IN_API,
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
    case SEND_BOOK_CREATE_IN_API:
      axios.post(
        'http://sandy-bouzid.vpnuser.lan:8000/api/books',

        {
          title: store.getState().book.title,
          editor: store.getState().book.editor,
          collection: store.getState().book.collection,
          publication_date: store.getState().book.publication_date,
          price: store.getState().book.price,
          pages: store.getState().book.pages,
          summary: store.getState().book.summary,
          authors: [
            {
              lastname: store.getState().book.lastname,
              firstname: store.getState().book.firstname,
            },
          ],
        },
        {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(removeInput());
        });
      break;
    default:
  }
  next(action);
};

export default bookMiddleware;
