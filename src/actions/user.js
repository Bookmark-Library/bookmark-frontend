export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
// change of one of the fields of the settings form
export const CHANGE_SETTINGS_FIELD = 'CHANGE_SETTINGS_FIELD';
// send authentication info to API
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// Save authentication info in state
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const SET_TOKEN_IN_STORAGE = 'SET_TOKEN_IN_STORAGE';
export const openModal = () => ({
  type: OPEN_MODAL,
});
export const closeModal = () => ({
  type: CLOSE_MODAL,
});
export const changeSettingsField = (newValue, identifier) => ({
  type: CHANGE_SETTINGS_FIELD,
  newValue: newValue,
  identifier: identifier,
});
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
export const saveAuthData = (token) => ({
  type: SAVE_AUTH_DATA,
  token: token,
});

export const submitLogout = () => ({
  type: SUBMIT_LOGOUT,
});
export const fetchUserInfo = () => ({
  type: FETCH_USER_INFO,
});
export const SaveUserInfo = (alias, avatar, id) => ({
  type: SAVE_USER_INFO,
  alias: alias,
  avatar: avatar,
  id: id,
});

export const setTokenInStorage = (storage) => ({

  type: SET_TOKEN_IN_STORAGE,
  storage: storage,
});
