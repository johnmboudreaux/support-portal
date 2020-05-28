import * as types from '../actions/actionTypes.js';
import companyNodes from '../../components/shared/data/company.json';

export const setCompanySearchString = (companySearchString) => {
  // this will pull directly from the eme.company table i dont think a companyTypeId will be required
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
