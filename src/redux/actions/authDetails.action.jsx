import * as types from '../actions/actionTypes.js';
import cleanAuthDetailsData from '../../utils/cleanAuthDetailsData.js';

export const startAuthDetailCall = (formattedForStoreDate) => {
  return {
    type: types.LOAD_CHANGED_DATE_OF_VISIT,
    formattedForStoreDate,
  };
};

// export const saveAuthDetailsFail = () => {
//   return {
//     type: 'Sometype',
//   };
// };

// export const saveAuthDetailsSuccess = () => {
//   return {
//     type: 'Sometype',
//   };
// };

export const saveAuthDetails = (date) => {
  const cleanPatientData = {
    dateOfVisit: cleanAuthDetailsData.parseDateForStore(date),
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
