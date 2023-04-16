/* eslint-disable import/prefer-default-export */
export const OPEN_MODAL_RATE = 'OPEN_MODAL_RATE';
export const CLOSE_MODAL_RATE = 'CLOSE_MODAL_RATE';
export const CHANGE_TAB_KEY = 'CHANGE_TAB_KEY';
export const CHANGE_RATE_FIELD = 'CHANGE_RATE_FIELD';

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
