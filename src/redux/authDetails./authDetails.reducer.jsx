import * as types from '../actions/actionTypes.js';

const authDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_CHANGED_DATE_OF_VISIT:
      return {
        storedDate: action.formattedForStoreDate,
      };
    default:
      return state;
  }
};

export default authDetailsReducer;
