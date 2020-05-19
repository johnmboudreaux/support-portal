import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const setCheckinStatuses = () => {
  const checkInStatuses = dataNodes.map((node) => node.status);

  return {
    type: types.SET_CHECK_IN_STATUSES,
    checkInStatuses,
  };
};
