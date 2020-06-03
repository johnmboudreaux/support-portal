import * as types from '../actions/actionTypes.js';
import dataFormatters from '../../utils/dataFormatters.js';

export const setDateOfVisit = (dateOfVisit) => {
  const formatPatientDate = {
    dateOfVisit: dataFormatters.parseDateForStore(dateOfVisit),
  };

  // this will pull from eme.authorizationPatient table
  return {
    type: types.SET_DATE_OF_VISIT,
    reduxDate: formatPatientDate.dateOfVisit,
  };
};
