import React from 'react';
import Header from './components/header/header.component.jsx';
import Main from './components/main/main.component.jsx';
import AuthTable from './components/table/authTable.component.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AuthTable />
    </div>
  );
}

export default App;
