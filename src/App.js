import React, { Component } from 'react';
import Header from './components/header/header.component.jsx';
import AuthAdminPage from './pages/authAdminPage/authAdminPage.component.jsx';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      filterClosed: true
    }
  }

  handleClick = () => {
    this.setState({
      filterClosed: !this.state.filterClosed
    })
  }
  
  render() {    
    return (
      <div className="App">
        <Header />
        <AuthAdminPage handleClick={this.handleClick} filterState={this.state.filterClosed}/>
      </div>
    );
  }
}

export default App;
