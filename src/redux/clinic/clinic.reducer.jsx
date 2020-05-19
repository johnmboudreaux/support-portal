import * as types from '../actions/actionTypes.js';

const clinicReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_CLINIC:
      return {
        ...state,
        clinics: action.clinic,
      };
    default:
      return state;
  }
};

export default clinicReducer;
