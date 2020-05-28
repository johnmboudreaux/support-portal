import * as types from '../actions/actionTypes.js';

const checkInStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_CHECK_IN_STATUS:
      return {
        ...state,
        checkInStatus: action.checkInStatus,
      };
    default:
      return state;
  }
};

export default checkInStatusReducer;
