import * as types from '../actions/actionTypes.js';

const authDetailsReducer = (state = { isFetching: false }, action) => {
  // debugger;
  switch (action.type) {
    case types.LOAD_CHANGED_DATE_OF_VISIT:
      return {
        ...state,
        ...action,
      };
    case types.SAVE_AUTH_DETAILS_FAIL:
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
};

export default authDetailsReducer;
