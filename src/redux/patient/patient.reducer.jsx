import * as types from '../actions/actionTypes.js';

const initialPatientState = {
  active: '',
  authorizationPatientId: '',
  authRep: '',
  authRepPhone: '',
  billingGroup: '',
  clinic: '',
  company: '',
  dob: '',
  firstName: '',
  jobNumber: '',
  lastName: '',
  lastUpdated: '',
  phone: '',
  poNum: '',
  provider: '',
  reason: '',
  ssn: '',
  status: '',
  visitDate: '',
};

const patientReducer = (state = initialPatientState, action) => {
  switch (action.type) {
    case types.SET_PATIENT_ID_VALUE:
      return {
        ...state,
        ...action.patient,
      };
    case types.SET_PATIENT_REASON:
      return {
        ...state,
        reason: action.reason,
      };
    default:
      return state;
  }
};

export default patientReducer;
