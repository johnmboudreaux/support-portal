import * as types from '../actions/actionTypes.js';

const billingGroupReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_BILLING_GROUP:
      return {
        ...state,
        ...action.billingGroup,
      };
    default:
      return state;
  }
};

export default billingGroupReducer;
