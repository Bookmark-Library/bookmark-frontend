import axios from 'axios';
import {
  addBooksInApp, FETCH_FAVORITE_BOOKS, GET_BOOKS_FROM_API, saveFavoriteBooks,
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
          console.log(response);
          store.dispatch(addBooksInApp(response.data));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });

      break;
    case FETCH_FAVORITE_BOOKS:
      axios.get(
        // URL
        'http://sandy-bouzid.vpnuser.lan:8000/api/users/15',
        // options (notamment les headers)
        {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(saveFavoriteBooks(response.data.favorites));
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
