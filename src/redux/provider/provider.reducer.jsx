import * as types from '../actions/actionTypes.js';

const providerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_PROVIDERS:
      return {
        ...state,
        providers: action.providers,
      };
    default:
      return state;
  }
};

export default providerReducer;
