import * as types from '../actions/actionTypes.js';
import companyNodes from '../../components/shared/data/company.json';

export const setCompanySearchString = (companySearchString) => {
  const targetCompany = companyNodes.find((companyNode) => {
    return companyNode.companyName === companySearchString ? companyNode : null;
  });

  return {
    type: types.SET_COMPANY_SEARCH_STRING,
    company: targetCompany,
  };
};

export const setCompanies = () => {
  const companies = companyNodes.map((node) => {
    return node.companyName;
  });

  return {
    type: types.SET_COMPANIES,
    companies: companies,
  };
};
