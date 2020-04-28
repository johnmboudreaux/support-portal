import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import searchReducer from '../redux/search/search.reducer.jsx'
import authDetailsReducer from '../redux/authDetails/authDetails.reducer.jsx';

const persistConfig = {
  key: "root",
  storage
  // whitelist: ["cart"]
};

const rootReducer = combineReducers({
  search: searchReducer,
  authDetails: authDetailsReducer
});

export default persistReducer(persistConfig, rootReducer);