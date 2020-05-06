import * as types from '../actions/actionTypes.js';

const companyReducer = (state='', action) => {
  switch(action.type) {
    case types.SET_COMPANY_SEARCH_STRING:
      return {
        ...state,
        ...action.company
      }
      default:
      return state;
  }
}

export default companyReducer;