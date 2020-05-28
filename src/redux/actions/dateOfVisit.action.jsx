import * as types from '../actions/actionTypes.js';

export const setDateOfVisit = (dateOfVisit) => {
  console.log(dateOfVisit);

  // this will pull from eme.authorizationPatient table
  return {
    type: types.SET_DATE_OF_VISIT,
    dateOfVisit,
  };
};
