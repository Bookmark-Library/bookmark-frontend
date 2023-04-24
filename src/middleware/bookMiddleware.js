import axios from 'axios';
import {
  addBooksInApp, GET_BOOKS_FROM_API,
  removeInputBookForm, SEND_BOOK_BY_ISBN, SEND_BOOK_CREATE_IN_API,
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
      if (Object.keys(store.getState().user.formErrors).length !== 0) {
        return;
      }
      axios.post(
        'http://sandy-bouzid.vpnuser.lan:8000/api/books',

        {
          title: store.getState().book.title,
          editor: store.getState().book.editor,
          collection: store.getState().book.collection,
          publication_date: parseInt(store.getState().book.publication_date, 10),
          price: store.getState().book.price,
          pages: parseInt(store.getState().book.pages, 10),
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
          store.dispatch(removeInputBookForm());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SEND_BOOK_BY_ISBN:
      axios.post(
        'http://sandy-bouzid.vpnuser.lan:8000/api/books/isbn',

        {
          isbn: store.getState().book.isbn,
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
          store.dispatch(removeInputBookForm());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};

export default bookMiddleware;
