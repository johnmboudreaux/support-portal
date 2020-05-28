import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const setClinics = () => {
  // this should pull from the company table with a companyTypeId of 2
  const clinic = dataNodes.map((node) => node.clinic);

  return {
    type: types.SET_CLINIC,
    clinic: clinic,
  };
};
