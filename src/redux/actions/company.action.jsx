import * as types from '../actions/actionTypes.js';
import dataNodes from '../../components/shared/data/company.json';

export const setCompanySearchString = (companySearchString) => {
  const targetCompany = dataNodes.find((companyNode) => {
    return companyNode.companyName === companySearchString ? companyNode : null;
  });

  return {
    type: types.SET_COMPANY_SEARCH_STRING,
    company: targetCompany,
  };
};
