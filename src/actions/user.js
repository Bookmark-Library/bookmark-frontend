export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
// changement de l'un des champs du formulaire settings
export const CHANGE_SETTINGS_FIELD = 'CHANGE_SETTINGS_FIELD';
// envoyer les infos d'authentification à l'API
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

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
