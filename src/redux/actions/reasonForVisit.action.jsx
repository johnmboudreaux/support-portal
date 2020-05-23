import * as types from '../actions/actionTypes.js';

export const setReasonsForVisit = (reasonsArray) => {
  return {
    type: types.SET_REASON_FOR_VISIT,
    reasonsForVisit: reasonsArray,
  };
};

export const requestReasons = () => {
  return {
    type: types.REQUEST_REASONS,
  };
};

export const loadReasonsForVisit = () => {
  return (dispatch) => {
    dispatch(requestReasons());
    return fetch('/reasons.json')
      .then((response) => response.json())
      .then((json) => {
        dispatch(setReasonsForVisit(json));
      })
      .catch((err) => console.error(err));
  };
};
