// import dataBook from '../../utils/bookData';

import {
  CHANGE_RATE_FIELD, CHANGE_TAB_KEY, CLOSE_MODAL_RATE, OPEN_MODAL_RATE,
  ADD_BOOKS_IN_APP, SAVE_USER_BOOKS, CHANGE_INPUT,
  PUT_COMMENT_IN_STATE, PUT_QUOTE_IN_STATE, REMOVE_INPUT,
} from '../actions/book';
import { SUBMIT_LOGOUT } from '../actions/user';

export const initialState = {
  bookList: [],
  libraries: [],
  // dataBook,
  tabKey: 'one',
  ModalRate: false,
  commentaire: null,
  citation: null,
  favorite: false,
  purchased: false,
  finished: false,
  wishlist: false,
  /** FORM ADD BOOK */
  title: '',
  lastname: '',
  firstname: null,
  editor: null,
  collection: null,
  publication_date: null,
  price: null,
  pages: null,
  summary: null,
  isbn: null,
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
    case PUT_COMMENT_IN_STATE:
      return {
        ...state,
        commentaire: action.value,
      };
    case PUT_QUOTE_IN_STATE:
      return {
        ...state,
        citation: action.value,
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
    case REMOVE_INPUT:
      return {
        ...state,
        title: '',
        lastname: '',
        firstname: '',
        editor: '',
        collection: '',
        publication_date: '',
        price: '',
        pages: '',
        summary: '',
      };
    default:
      return state;
  }
};

export default reducer;
