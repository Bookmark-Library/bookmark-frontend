import {
  OPEN_MODAL, CHANGE_SETTINGS_FIELD, CLOSE_MODAL, SAVE_AUTH_DATA, SAVE_USER_INFO, SUBMIT_LOGOUT,
} from '../actions/user';
import avatar from '../assets/images/user-128.png';

export const initialState = {
  logged: !!localStorage.getItem('token'),
  email: '',
  password: '',
  token: localStorage.getItem('token'),
  avatar: { avatar },
  alias: localStorage.getItem('pseudo'),

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
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
        id: action.id,
      };
    case SUBMIT_LOGOUT:
      return {
        ...state,
        logged: false,
        alias: '',
        token: '',
        email: '',

      };

    default:
      return state;
  }
};

export default reducer;
