/* eslint-disable import/prefer-default-export */
/** ******* FOR MODAL RATE ***************** */
export const OPEN_MODAL_RATE = 'OPEN_MODAL_RATE';
export const CLOSE_MODAL_RATE = 'CLOSE_MODAL_RATE';
export const CHANGE_TAB_KEY = 'CHANGE_TAB_KEY';
export const CHANGE_RATE_FIELD = 'CHANGE_RATE_FIELD';
export const PUT_COMMENT_IN_STATE = 'PUT_COMMENT_IN_STATE';
export const PUT_QUOTE_IN_STATE = 'PUT_QUOTE_IN_STATE';

/** ******* GET BOOKS ***************** */
export const ADD_BOOKS_IN_APP = 'ADD_BOOKS_IN_APP';
export const GET_BOOKS_FROM_API = 'GET_BOOKS_FROM_API';
export const FETCH_FAVORITE_BOOKS = 'FETCH_FAVORITE_BOOKS';
export const SAVE_USER_BOOKS = 'SAVE_USER_BOOKS';
export const CHANGE_INPUT = 'CHANGE_INPUT';
/** ******* POST BOOK **************** */
export const SEND_BOOK_CREATE_IN_API = 'SEND_BOOK_CREATE_IN_API';
export const SEND_BOOK_BY_ISBN = 'SEND_BOOK_BY_ISBN';
export const REMOVE_INPUT_BOOK_FORM = 'REMOVE_INPUT_BOOK_FORM';

export const openModalRate = () => ({
  type: OPEN_MODAL_RATE,
});
export const closeModalRate = () => ({
  type: CLOSE_MODAL_RATE,
});
export const changeTabKey = (key) => ({
  type: CHANGE_TAB_KEY,
  key: key,
});
export const changeRateField = (identifier, newValue) => ({
  type: CHANGE_RATE_FIELD,
  identifier: identifier,
  newValue: newValue,
});
export const putCommentInState = (value) => ({
  type: PUT_COMMENT_IN_STATE,
  value: value,
});
export const putQuoteInState = (value) => ({
  type: PUT_QUOTE_IN_STATE,
  value: value,
});
/** *******BOOKS ***************** */
export const addBooksInApp = (newList) => ({
  type: ADD_BOOKS_IN_APP,
  newList: newList,
});
export const getBooksFromApi = () => ({
  type: GET_BOOKS_FROM_API,
});

export const fetchFavoriteBooks = () => ({
  type: FETCH_FAVORITE_BOOKS,
});

export const saveUserBooks = (userLibrary) => ({
  type: SAVE_USER_BOOKS,
  userLibrary: userLibrary,
});

export const changeInput = (identifier, newValue) => ({
  type: CHANGE_INPUT,
  identifier: identifier,
  newValue: newValue,
});

export const sendBookCreateInApi = () => ({
  type: SEND_BOOK_CREATE_IN_API,
});
export const sendBookByIsbn = () => ({
  type: SEND_BOOK_BY_ISBN,
});

export const removeInputBookForm = () => ({
  type: REMOVE_INPUT_BOOK_FORM,
});
