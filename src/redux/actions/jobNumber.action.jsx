import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const setJobNumbers = (searchedJobNumberString) => {
  // this will pull from eme.projectCompanyjob table
  const jobNumbers = dataNodes.map((node) => {
    return node.jobNumber;
  });

  return {
    type: types.SET_JOB_NUMBERS,
    jobs: jobNumbers,
  };
};

export const setJobNumberString = (searchedJobNumberString) => {
  return {
    type: types.SET_SEARCHED_JOB_NUMBER_STRING,
    jobName: searchedJobNumberString,
  };
};
