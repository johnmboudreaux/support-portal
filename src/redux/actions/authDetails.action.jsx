import * as types from '../actions/actionTypes.js';

export const startAuthDetailCall = () => {
  return {
    type: 'Sometype',
  };
};

export const saveAuthDetailsFail = () => {
  return {
    type: 'Sometype',
  };
};

export const saveAuthDetailsSuccess = () => {
  return {
    type: 'Sometype',
  };
};

export const saveAuthDetails = (utils, patient) => {
  const cleanPatientData = {
    name: utils.FormatName(patient.name),
    dateOfVisit: utils.FormatDate(patient.dateOfVisit), //05-18-2020T0:00:00
  };

  return (dispatch) => {
    dispatch(startAuthDetailCall());
    return fetch('/authorizationPatient', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(cleanPatientData), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch();
      })
      .catch((err) => console.error(err));
  };
};
