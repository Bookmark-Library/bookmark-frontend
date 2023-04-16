import { OPEN_MODAL, CHANGE_SETTINGS_FIELD, CLOSE_MODAL } from '../actions/user';

export const initialState = {
  showModal: false,
  email: '',
  password: '',
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
    default:
      return state;
  }
};

export default reducer;
