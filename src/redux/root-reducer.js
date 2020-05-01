import { combineReducers } from "redux";
import patient from '../redux/patient/patient.reducer.jsx';

const rootReducer = combineReducers({
  patient
});

export default rootReducer;
