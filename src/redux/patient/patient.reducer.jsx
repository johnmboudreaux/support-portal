import * as types from '../actions/actionTypes.js';

const patientReducer = (state={}, action) => {
  switch(action.type) {
    case types.SET_PATIENT_ID_VALUE:
      return {
        ...state,
        patientId: action.patientId
      }
    default:
    return state;
  }
}

export default patientReducer;
