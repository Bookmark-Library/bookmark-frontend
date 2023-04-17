export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
// change of one of the fields of the settings form
export const CHANGE_SETTINGS_FIELD = 'CHANGE_SETTINGS_FIELD';
// send authentication info to API
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// Save authentication info in state
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT';

export const openModal = () => ({
  type: OPEN_MODAL,
});
export const closeModal = () => ({
  type: CLOSE_MODAL,
});
export const changeSettingsField = (identifier, newValue) => ({
  type: CHANGE_SETTINGS_FIELD,
  identifier: identifier,
  newValue: newValue,
});
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
export const saveAuthData = (nickname, token) => ({
  type: SAVE_AUTH_DATA,
  nickname: nickname,
  token: token,
});

export const submitLogout = () => ({
  type: SUBMIT_LOGOUT,
});
