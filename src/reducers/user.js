import {
  OPEN_MODAL, CHANGE_SETTINGS_FIELD, CLOSE_MODAL, SAVE_AUTH_DATA,
} from '../actions/user';

export const initialState = {
  showModal: false,
  email: '',
  password: '',
  token: '',

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
        // sécurité : on efface les identifiants du state
        email: '',
        password: '',
        showModal: false,
      };

    default:
      return state;
  }
};

export default reducer;
