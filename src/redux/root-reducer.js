import { combineReducers } from 'redux';
import billingGroup from '../redux/billingGroup/billingGroup.reducer.jsx';
import checkInStatuses from '../redux/checkInStatuses/checkInStatuses.reducer.jsx';
import clinics from '../redux/clinic/clinic.reducer.jsx';
import company from '../redux/company/company.reducer.jsx';
import jobs from '../redux/jobNumber/jobNumber.reducer.jsx';
import patient from '../redux/patient/patient.reducer.jsx';
import providers from '../redux/provider/provider.reducer.jsx';
import purchaseOrder from '../redux/purchaseOrder/purchaseOrder.reducer.jsx';
import reasonsForVisit from '../redux/reasonForVisit/reasonsForVisit.reducer.jsx';

const rootReducer = combineReducers({
  billingGroup,
  checkInStatuses,
  clinics,
  company,
  jobs,
  patient,
  providers,
  purchaseOrder,
  reasonsForVisit,
});

export default rootReducer;
