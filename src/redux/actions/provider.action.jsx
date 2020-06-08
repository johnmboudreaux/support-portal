import * as types from '../actions/actionTypes.js';
import providers from '../../components/shared/data/providers.json';

export const setProviders = () => {
  const providerList = providers.map((provider) => provider.ProviderID);

  return {
    type: types.SET_PROVIDERS,
    providerList,
  };
};
