import * as types from '../actions/actionTypes.js';

const JobNumberReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_JOB_NUMBERS:
      return {
        ...state,
        jobs: action.jobs,
      };
    case types.SET_SEARCHED_JOB_NUMBER_STRING:
      return {
        ...state,
        searchedJobName: action.jobName,
      };
    default:
      return state;
  }
};

export default JobNumberReducer;
