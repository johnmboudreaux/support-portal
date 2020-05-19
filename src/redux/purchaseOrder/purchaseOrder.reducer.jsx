import * as types from '../actions/actionTypes.js';

const purchaseOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_PURCHASE_ORDER:
      return {
        ...state,
        ...action.purchaseOrder,
      };
    default:
      return state;
  }
};

export default purchaseOrderReducer;
