import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/authorization.json';

export const setProviders = () => {
  // this will pull from eme.providerTable with a contactId
  const providers = dataNodes.map((node) => node.provider);

  return {
    type: types.SET_PROVIDERS,
    providers,
  };
};
