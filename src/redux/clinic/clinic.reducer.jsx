import * as types from '../actions/actionTypes.js';

const clinicReducer = (state = [], action) => {
  switch (action.type) {
    case types.SET_CLINIC:
      return action.clinics;
    default:
      return state;
  }
};

export default clinicReducer;
