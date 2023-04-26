import axios from 'axios';
import {
  addBooksInApp, addGenderInApp, addHomeGenderInApp, closeModalRate, deleteBookInState, DELETE_BOOK, GET_BOOKS_FROM_API,
  GET_GENDER_FROM_API,
  GET_HOME_GENDER_FROM_API,
  removeInputBookForm, SEND_BOOK_BY_ISBN, SEND_BOOK_CREATE_IN_API, SEND_RATE_TO_API,
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
    case GET_HOME_GENDER_FROM_API:
      axios.get(
        'http://sandy-bouzid.vpnuser.lan:8000/api/genres/home',
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(addHomeGenderInApp(response.data));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });

      break;
    case GET_GENDER_FROM_API:
      axios.get(
        'http://sandy-bouzid.vpnuser.lan:8000/api/genres',
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(addGenderInApp(response.data));
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
          publicationDate: parseInt(store.getState().book.publicationDate, 10),
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
    case SEND_RATE_TO_API:
      axios.put(
        `http://sandy-bouzid.vpnuser.lan:8000/api/libraries/${store.getState().book.id}`,

        {
          comment: store.getState().book.commentaire,
          quote: store.getState().book.ciation,
          rate: parseInt(store.getState().book.rate, 10),
          purchased: store.getState().book.purchased,
          favorite: store.getState().book.favorite,
          wishlist: store.getState().book.wishlist,
          finished: store.getState().book.finished,
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
          store.dispatch(closeModalRate());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case DELETE_BOOK:
      axios.delete(
        `http://sandy-bouzid.vpnuser.lan:8000/api/libraries/${store.getState().book.id}`,

        {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(deleteBookInState());
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
