import * as types from '../actions/actionTypes.js';

const visitDateReducer = (state = [], action) => {
  switch (action.type) {
    case types.SET_VISIT_DATE:
      return action.visitDate;
    default:
      return state;
  }
};

export default visitDateReducer;
