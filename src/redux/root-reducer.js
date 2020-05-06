import { combineReducers } from "redux";
import patient from '../redux/patient/patient.reducer.jsx';
import company from '../redux/company/company.reducer.jsx';

const rootReducer = combineReducers({
  patient,
  company
});

export default rootReducer;
