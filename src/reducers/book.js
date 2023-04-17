// import data from 'src/data';

import {
  CHANGE_RATE_FIELD, CHANGE_TAB_KEY, CLOSE_MODAL_RATE, OPEN_MODAL_RATE,
  ADD_BOOKS_IN_APP, SAVE_FAVORITE_BOOKS,
} from '../actions/book';

export const initialState = {
  bookList: [],
  favorites: [],
  tabKey: 'one',
  ModalRate: false,
  commentaire: '',
  citation: '',

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
    case SAVE_FAVORITE_BOOKS:
      return {
        ...state,
        favorites: action.favoriteBooks,
      };
    default:
      return state;
  }
};

export default reducer;
