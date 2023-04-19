// import dataBook from '../../utils/bookData';

import {
  CHANGE_RATE_FIELD, CHANGE_TAB_KEY, CLOSE_MODAL_RATE, OPEN_MODAL_RATE,
  ADD_BOOKS_IN_APP, SAVE_USER_BOOKS, CHANGE_INPUT,
} from '../actions/book';
import { SUBMIT_LOGOUT } from '../actions/user';

export const initialState = {
  bookList: [],
  libraries: [],
  // dataBook,
  tabKey: 'one',
  ModalRate: false,
  commentaire: '',
  citation: '',
  favorite: false,
  purchased: false,
  finished: false,
  wishlist: false,
  /** FORM ADD BOOK */
  title: '',
  lastname: '',
  firstname: '',
  editor: '',
  collection: '',
  publication_date: '',
  price: '',
  pages: '',
  summary: '',
  isbn: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL_RATE:
      return {
        ...state,
        modalRate: !state.modalRate,
      };
    case CLOSE_MODAL_RATE:
      return {
        ...state,
        modalRate: false,
      };
    case CHANGE_TAB_KEY:
      return {
        ...state,
        tabKey: action.key,
      };
    case CHANGE_RATE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case ADD_BOOKS_IN_APP:
      return {
        ...state,
        bookList: action.newList,
        // isBooksLoaded: true,

      };
    case SAVE_USER_BOOKS:
      return {
        ...state,
        libraries: action.userLibrary,
      };
    case SUBMIT_LOGOUT:
      return {
        ...state,
        libraries: [],
      };
    case CHANGE_INPUT:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
