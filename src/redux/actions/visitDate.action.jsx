import * as types from '../actions/actionTypes.js';

export const setSelectedDate = (visitDate) => {
  return {
    type: types.SET_VISIT_DATE,
    visitDate,
  };
};
