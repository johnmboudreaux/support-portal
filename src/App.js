import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/header/header.component.jsx';
import AuthAdminPage from './pages/authAdminPage/authAdminPage.component.jsx';

import './App.css';

const App = () => {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/admin' component={AuthAdminPage} />
        </Switch>
      </div>
    );
}

export default App;
