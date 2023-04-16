// import data from 'src/data';

import {
  CHANGE_RATE_FIELD, CHANGE_TAB_KEY, CLOSE_MODAL_RATE, OPEN_MODAL_RATE,
} from '../actions/book';

export const initialState = {
  tabKey: 'one',
  ModalRate: false,
  commentaire: '',
  citation: '',

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL_RATE:
      return {
        ...state,
        modalRate: !state.modalRate,
      };
    case CLOSE_MODAL_RATE:
      return {
        ...state,
        modalRate: false,
      };
    case CHANGE_TAB_KEY:
      return {
        ...state,
        tabKey: action.key,
      };
    case CHANGE_RATE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
