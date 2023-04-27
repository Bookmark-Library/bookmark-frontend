import {
  CHANGE_RATE_FIELD, CHANGE_TAB_KEY, CLOSE_MODAL_RATE, OPEN_MODAL_RATE,
  ADD_BOOKS_IN_APP, SAVE_USER_BOOKS, CHANGE_INPUT,
  PUT_COMMENT_IN_STATE, PUT_QUOTE_IN_STATE,
  REMOVE_INPUT_BOOK_FORM, PUT_RATE_IN_STATE, HANDLE_RATE_CHANGE,
  TOGGLE_CHECKBOX, PUT_BOOKMARKS_IN_STATE, PUT_ID_IN_STATE,
  DELETE_BOOK_IN_STATE, ADD_HOME_GENDER_IN_APP, ADD_GENDER_IN_APP, FILTER_BOOK, SET_SORT_BY,
} from '../actions/book';
import { SUBMIT_LOGOUT } from '../actions/user';

export const initialState = {
  bookList: [],
  libraries: localStorage.getItem('bibliotheque') || [],
  isLoading: true,
  tabKey: 'one',
  ModalRate: false,
  commentaire: '',
  citation: '',
  favorite: false,
  purchased: false,
  finished: false,
  wishlist: false,
  rate: 0,
  id: 0,
  gender: [],
  genderId: null,
  homeGender: [],
  sortBy: '',
  /** FORM ADD BOOK */
  title: '',
  lastname: '',
  firstname: null,
  editor: null,
  collection: null,
  publicationDate: null,
  price: null,
  pages: null,
  summary: null,
  isbn: null,
  bookId: 0,
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
    case PUT_RATE_IN_STATE:
      return {
        ...state,
        rate: action.value,
      };
    case PUT_BOOKMARKS_IN_STATE:
      return {
        ...state,
        [action.identifier]: action.value,

      };
    case PUT_ID_IN_STATE:
      return {
        ...state,
        [action.identifier]: action.value,

      };
    case HANDLE_RATE_CHANGE:
      return {
        ...state,
        rate: action.value,
      };
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        [action.identifier]: action.value,
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
        isLoading: false,
      };
    case ADD_HOME_GENDER_IN_APP:
      return {
        ...state,
        homeGender: action.genderList,
        // isLoading: false,
      };
    case ADD_GENDER_IN_APP:
      return {
        ...state,
        gender: action.genderList,
        // isLoading: false,
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
    case REMOVE_INPUT_BOOK_FORM:
      return {
        ...state,
        title: '',
        lastname: '',
        firstname: '',
        editor: '',
        collection: '',
        publicationDate: '',
        price: '',
        pages: '',
        summary: '',
        isbn: '',
      };
    case DELETE_BOOK_IN_STATE:
      return {
        ...state,
        commentaire: '',
        citation: '',
        favorite: false,
        purchased: false,
        finished: false,
        wishlist: false,
        rate: 0,
        id: 0,

      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy,
      };

    case FILTER_BOOK:
      return {
        ...state,
        libraries: action.filteredBooks,
      };
    default:
      return state;
  }
};

export default reducer;
