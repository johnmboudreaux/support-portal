import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const loadCheckinStatus = () => {
  // will pull from authorizationPatientInClinic
  const checkInStatus = dataNodes.map((node) => node.status);

  return {
    type: types.LOAD_CHECK_IN_STATUS,
    checkInStatus,
  };
};
