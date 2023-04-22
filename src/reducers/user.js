import { CHANGE_INPUT, REMOVE_INPUT } from '../actions/book';
import {
  OPEN_MODAL, CHANGE_SETTINGS_FIELD, CLOSE_MODAL,
  SAVE_AUTH_DATA, SAVE_USER_INFO, SUBMIT_LOGOUT, DELETE_USER, UPDATE_USER, UPDATE_FORM_ERRORS,
} from '../actions/user';

export const initialState = {
  logged: !!localStorage.getItem('token'),
  email: '',
  password: '',
  token: localStorage.getItem('token'),
  avatar: '',
  alias: localStorage.getItem('pseudo'),
  showModal: false,
  formErrors: {},

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case CHANGE_SETTINGS_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case SAVE_AUTH_DATA:
      return {
        ...state,
        token: action.token,
        logged: true,
        // sécurité : on efface les identifiants du state
        password: '',
      };
    case SAVE_USER_INFO:
      return {
        ...state,
        alias: action.alias,
        avatar: action.avatar,
        email: action.email,
      };
    case SUBMIT_LOGOUT:
      return {
        ...state,
        logged: false,
        alias: '',
        token: '',
        email: '',

      };
    case CHANGE_INPUT:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case REMOVE_INPUT:
      return {
        ...state,
        alias: '',
        email: '',
        password: '',
        avatar: '',
      };
    case DELETE_USER:
      return {
        ...state,
        alias: '',
        email: '',
        password: '',
        avatar: '',
        token: '',
        logged: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        alias: action.alias,
        avatar: action.avatar,
        email: action.email,
      };
    case UPDATE_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.errors,

      };
    default:
      return state;
  }
};

export default reducer;
