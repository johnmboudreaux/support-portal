import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const setBillingGroup = () => {
  const billingGroupArray = dataNodes.map((node) => node.billingGroup);

  return {
    type: types.SET_BILLING_GROUP,
    billingGroup: billingGroupArray,
  };
};
