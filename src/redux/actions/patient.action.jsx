import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const setPatientIdVal = (patientId) => {
    const targetPatient = dataNodes.find(patientNode => {
        return  patientNode.authorizationPatientId === patientId ? patientNode : null;
    });

    return {
        type: types.SET_PATIENT_ID_VALUE,
        patient: targetPatient
    }
};
