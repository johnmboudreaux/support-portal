import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const setPurchaseOrder = () => {
  const purchaseOrderArray = dataNodes.map((node) => node.poNum);

  return {
    type: types.SET_PURCHASE_ORDER,
    purchaseOrder: purchaseOrderArray,
  };
};
