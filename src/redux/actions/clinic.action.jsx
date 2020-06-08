import * as types from '../actions/actionTypes.js';
import companies from '../../components/shared/data/company.json';

export const setClinics = () => {
  const clinics = companies.reduce((accu, company, idx) => {
    if (company.companyTypeid === '2') {
      accu.push(company.companyName);
    }
    return accu;
  }, []);

  return {
    type: types.SET_CLINIC,
    clinics,
  };
};
