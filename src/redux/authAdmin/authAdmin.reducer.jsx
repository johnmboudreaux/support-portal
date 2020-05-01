import * as types from '../actions/actionTypes.js';

const authAdminReducer = (state={}, action) => {
  // debugger
  switch(action.type) {
    case types.SET_INPUT_VAL:
      return {
        ...state,
        inputVal: action.inputVal
      }
    default:
    return state;
  }
}

export default authAdminReducer;
