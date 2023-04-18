import {
  OPEN_MODAL, CHANGE_SETTINGS_FIELD, CLOSE_MODAL, SAVE_AUTH_DATA, SAVE_USER_INFO, SUBMIT_LOGOUT,
} from '../actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  token: '',
  avatar: '',
  alias: '',
  id: '1',

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
        // email: '',
        // password: '',
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
      };

    default:
      return state;
  }
};

export default reducer;
