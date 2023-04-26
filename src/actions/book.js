/* eslint-disable import/prefer-default-export */
/** ******* FOR MODAL RATE ***************** */
export const OPEN_MODAL_RATE = 'OPEN_MODAL_RATE';
export const CLOSE_MODAL_RATE = 'CLOSE_MODAL_RATE';
export const CHANGE_TAB_KEY = 'CHANGE_TAB_KEY';
export const CHANGE_RATE_FIELD = 'CHANGE_RATE_FIELD';
export const PUT_COMMENT_IN_STATE = 'PUT_COMMENT_IN_STATE';
export const PUT_QUOTE_IN_STATE = 'PUT_QUOTE_IN_STATE';
export const PUT_RATE_IN_STATE = 'PUT_RATE_IN_STATE';
export const PUT_BOOKMARKS_IN_STATE = 'PUT_BOOKMARKS_IN_STATE';
export const PUT_ID_IN_STATE = 'PUT_ID_IN_STATE';
export const DELETE_BOOK = 'DELETE_BOOK';
export const DELETE_BOOK_IN_STATE = 'DELETE_BOOK_IN_STATE';
export const HANDLE_RATE_CHANGE = 'HANDLE_RATE_CHANGE';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
// Send rate and bookmarks in api
export const SEND_RATE_TO_API = 'SEND_RATE_TO_API';
/** ******* GET BOOKS ***************** */
export const ADD_BOOKS_IN_APP = 'ADD_BOOKS_IN_APP';
export const GET_BOOKS_FROM_API = 'GET_BOOKS_FROM_API';
export const FETCH_FAVORITE_BOOKS = 'FETCH_FAVORITE_BOOKS';
export const SAVE_USER_BOOKS = 'SAVE_USER_BOOKS';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const GET_HOME_GENDER_FROM_API = 'GET_HOME_GENDER_FROM_API';
export const ADD_HOME_GENDER_IN_APP = 'ADD_HOME_GENDER_IN_APP';
export const GET_GENDER_FROM_API = 'GET_GENDER_FROM_API';
export const ADD_GENDER_IN_APP = 'ADD_GENDER_IN_APP';

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
export const putRateInState = (value) => ({
  type: PUT_RATE_IN_STATE,
  value: value,
});
export const putBookmarksInState = (identifier, value) => ({
  type: PUT_BOOKMARKS_IN_STATE,
  identifier: identifier,
  value: value,
});
export const putIdInState = (identifier, value) => ({
  type: PUT_ID_IN_STATE,
  identifier: identifier,
  value: value,
});
export const handleRateChange = (value) => ({
  type: HANDLE_RATE_CHANGE,
  value: value,
});
export const toggleCheckbox = (identifier, value) => ({
  type: TOGGLE_CHECKBOX,
  identifier: identifier,
  value: value,
});
export const sendRateToApi = () => ({
  type: SEND_RATE_TO_API,
});
/** *******BOOKS ***************** */
export const addBooksInApp = (newList) => ({
  type: ADD_BOOKS_IN_APP,
  newList: newList,
});
export const getBooksFromApi = () => ({
  type: GET_BOOKS_FROM_API,
});
export const getHomeGenderFromApi = () => ({
  type: GET_HOME_GENDER_FROM_API,
});
export const addHomeGenderInApp = (genderList) => ({
  type: ADD_HOME_GENDER_IN_APP,
  genderList: genderList,
});
export const getGenderFromApi = () => ({
  type: GET_GENDER_FROM_API,
});
export const addGenderInApp = (genderList) => ({
  type: ADD_GENDER_IN_APP,
  genderList: genderList,
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

export const deleteBook = () => ({
  type: DELETE_BOOK,
});
export const deleteBookInState = () => ({
  type: DELETE_BOOK_IN_STATE,
});
