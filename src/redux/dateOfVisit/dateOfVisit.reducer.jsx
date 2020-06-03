import * as types from '../actions/actionTypes.js';

const dateOfVisitReducer = (state = [], action) => {
  switch (action.type) {
    case types.SET_DATE_OF_VISIT:
      return action.reduxDate;
    default:
      return state;
  }
};

export default dateOfVisitReducer;
