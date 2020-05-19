import { combineReducers } from 'redux';
import billingGroup from '../redux/billingGroup/billingGroup.reducer.jsx';
import company from '../redux/company/company.reducer.jsx';
import jobs from '../redux/jobNumber/jobNumber.reducer.jsx';
import patient from '../redux/patient/patient.reducer.jsx';
import purchaseOrder from '../redux/purchaseOrder/purchaseOrder.reducer.jsx';

const rootReducer = combineReducers({
  billingGroup,
  company,
  jobs,
  patient,
  purchaseOrder,
});

export default rootReducer;
