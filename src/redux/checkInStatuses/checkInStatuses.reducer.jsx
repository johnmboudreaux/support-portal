import * as types from '../actions/actionTypes.js';

const checkInStatusesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_CHECK_IN_STATUSES:
      return {
        ...state,
        checkInStatuses: action.checkInStatuses,
      };
    default:
      return state;
  }
};

export default checkInStatusesReducer;
