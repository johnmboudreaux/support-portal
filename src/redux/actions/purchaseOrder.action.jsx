import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const setPurchaseOrder = () => {
  // this should pull from eme.authorizationPatient table
  const purchaseOrderArray = dataNodes.map((node) => node.poNum);

  return {
    type: types.SET_PURCHASE_ORDER,
    purchaseOrder: purchaseOrderArray,
  };
};
