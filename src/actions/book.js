/* eslint-disable import/prefer-default-export */
export const OPEN_MODAL_RATE = 'OPEN_MODAL_RATE';
export const CLOSE_MODAL_RATE = 'CLOSE_MODAL_RATE';
export const CHANGE_TAB_KEY = 'CHANGE_TAB_KEY';
export const CHANGE_RATE_FIELD = 'CHANGE_RATE_FIELD';
/** *******BOOKS ***************** */
export const ADD_BOOKS_IN_APP = 'ADD_BOOKS_IN_APP';
export const GET_BOOKS_FROM_API = 'GET_BOOKS_FROM_API';
export const FETCH_FAVORITE_BOOKS = 'FETCH_FAVORITE_BOOKS';
export const SAVE_FAVORITE_BOOKS = 'SAVE_FAVORITE_BOOKS';

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

export const saveFavoriteBooks = (favoriteBooks) => ({
  type: SAVE_FAVORITE_BOOKS,
  favoriteBooks: favoriteBooks,
});
