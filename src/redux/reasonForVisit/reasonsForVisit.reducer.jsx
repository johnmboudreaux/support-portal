import * as types from '../actions/actionTypes.js';

const reasonsForVisitReducer = (state = [], action) => {
  switch (action.type) {
    case types.SET_REASON_FOR_VISIT:
      return action.reasonsForVisit;
    default:
      return state;
  }
};

export default reasonsForVisitReducer;
