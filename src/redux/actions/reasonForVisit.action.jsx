import * as types from '../actions/actionTypes.js';
import testReasons from '../../components/shared/data/testReasons.json';

export const setReasonsForVisit = () => {
  const reasonsForVisit = testReasons.map((reason) => reason);

  return {
    type: types.SET_REASON_FOR_VISIT,
    reasonsForVisit,
  };
};
