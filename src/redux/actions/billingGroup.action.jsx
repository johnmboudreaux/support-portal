import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const setBillingGroup = () => {
  // this will pull from billing.billingGroup table
  const billingGroup = dataNodes.map((node) => node.billingGroup);

  return {
    type: types.SET_BILLING_GROUP,
    billingGroup: billingGroup,
  };
};
