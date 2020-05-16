import { combineReducers } from 'redux';
import patient from '../redux/patient/patient.reducer.jsx';
import company from '../redux/company/company.reducer.jsx';
import jobs from '../redux/jobNumber/jobNumber.reducer.jsx';
import billingGroup from '../redux/billingGroup/billingGroup.reducer.jsx';

const rootReducer = combineReducers({
  patient,
  company,
  jobs,
  billingGroup,
});

export default rootReducer;
