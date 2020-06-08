import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const setPatientIdVal = (patientId) => {
  const targetPatient = dataNodes.find((patientNode) => {
    return patientNode.authorizationPatientId === patientId
      ? patientNode
      : null;
  });

  return {
    type: types.SET_PATIENT_ID_VALUE,
    patient: targetPatient,
  };
};

export const setPatientReason = (reason) => {
  return {
    type: types.SET_PATIENT_REASON,
    reason,
  };
};

export const setChangedClinic = (changedClinicArray) => {
  const changedClinic = changedClinicArray[0];

  return {
    type: types.SET_CHANGED_CLINIC_ON_PATIENT,
    changedClinic,
  };
};

export const setChangedProvider = (providerToChangeTo) => {
  const provider = providerToChangeTo[0];

  return {
    type: types.SET_CHANGED_PROVIDER_ON_PATIENT,
    provider,
  };
};
