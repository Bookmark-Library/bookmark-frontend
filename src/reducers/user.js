import { CHANGE_INPUT } from "../actions/book";
import {
  OPEN_MODAL,
  CHANGE_SETTINGS_FIELD,
  CLOSE_MODAL,
  SAVE_AUTH_DATA,
  SAVE_USER_INFO,
  SUBMIT_LOGOUT,
  DELETE_USER,
  UPDATE_USER,
  UPDATE_FORM_ERRORS,
  REMOVE_INPUT,
  UPLOAD_FILE,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_VALIDITY,
  TOGGLE_PASSWORD_VISIBILITY,
} from "../actions/user";

export const initialState = {
  logged: !!localStorage.getItem("token"),
  email: localStorage.getItem("email") || "",
  password: "",
  passwordCheck: "",
  emailInscription: "",
  passwordInscription: "",
  passwordVerify: "",
  showPassword: false,
  validity: {
    uppercase: false,
    minLength: false,
    specialChar: false,
    number: false,
  },
  token: localStorage.getItem("token") || "",
  avatar: "",
  file: "",
  alias: localStorage.getItem("pseudo") || "",
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
        validity: action.validity,
      };
    case SAVE_AUTH_DATA:
      return {
        ...state,
        token: action.token,
        logged: true,
        // sécurité : on efface les identifiants du state
        password: "",
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
        alias: "",
        token: "",
        email: "",
        avatar: "",
      };
    case CHANGE_INPUT:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case REMOVE_INPUT:
      return {
        ...state,
        alias: "",
        email: "",
        password: "",
        avatar: "",
        emailInscription: "",
        passwordInscription: "",
      };
    case DELETE_USER:
      return {
        ...state,
        alias: "",
        email: "",
        password: "",
        avatar: "",
        token: "",
        logged: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        alias: action.alias,
        avatar: action.avatar,
        email: action.email,
        password: action.password,
        passwordCheck: action.passwordCheck,
      };
    case UPDATE_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.errors,
      };
    case UPLOAD_FILE:
      return {
        ...state,
        file: action.file,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        passwordInscription: action.password,
      };
    case UPDATE_PASSWORD_VALIDITY:
      return {
        ...state,
        validity: {
          ...state.validity,
          ...action.validity,
        },
      };
    case TOGGLE_PASSWORD_VISIBILITY:
      return { ...state, showPassword: !state.showPassword };

    default:
      return state;
  }
};

export default reducer;
