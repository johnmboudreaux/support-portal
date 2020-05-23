import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middleWares = [];

process.env.NODE_ENV === 'development'
  ? middleWares.push(logger, ReduxThunk)
  : middleWares.push(ReduxThunk);

const configureStore = (initialState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleWares))
  );
};

export default configureStore;
