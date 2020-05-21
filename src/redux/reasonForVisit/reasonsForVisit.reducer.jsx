import * as types from '../actions/actionTypes.js';
import testReasons from '../../components/shared/data/testReasons.json';

const reasonsForVisitReducer = (state = testReasons, action) => {
  switch (action.type) {
    case types.SET_REASON_FOR_VISIT:
      return {
        testReasons,
      };
    default:
      return state;
  }
};

export default reasonsForVisitReducer;
