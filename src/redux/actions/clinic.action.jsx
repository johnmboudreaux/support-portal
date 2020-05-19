import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const setClinics = () => {
  const clinic = dataNodes.map((node) => node.clinic);

  return {
    type: types.SET_CLINIC,
    clinic: clinic,
  };
};
