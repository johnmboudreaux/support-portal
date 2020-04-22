import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/header/header.component.jsx';
import AuthAdminPage from './pages/authAdminPage/authAdminPage.component.jsx';
import ProjectAdminPage from './pages/projectAdminPage/projectAdminPage.component.jsx';

import './App.css';

const App = () => {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/admin' component={AuthAdminPage} />
          <Route path='/project' component={ProjectAdminPage} />
        </Switch>
      </div>
    );
}

export default App;
