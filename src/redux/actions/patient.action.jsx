import * as types from '../actions/actionTypes.js';

export const setPatientIdVal = (patientId) => ({
    type: types.SET_PATIENT_ID_VALUE,
    patientId
});
