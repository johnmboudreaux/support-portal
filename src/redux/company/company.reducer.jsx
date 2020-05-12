import * as types from '../actions/actionTypes.js';

const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_COMPANY_SEARCH_STRING:
      return {
        ...state,
        ...action.company,
      };
    case types.SET_COMPANIES:
      return {
        ...state,
        ...action.companies,
      };
    default:
      return state;
  }
};

export default companyReducer;
