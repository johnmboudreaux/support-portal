import React from 'react';
import Header from './components/header/header.component.jsx';
import AuthAdminPage from './pages/authAdminPage/authAdminPage.component.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AuthAdminPage />
    </div>
  );
}

export default App;
