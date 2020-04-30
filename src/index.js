import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './index.scss';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <App />s
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
