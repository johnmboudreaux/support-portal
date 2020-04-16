import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import AuthEdit from '../../components/authEdit/authEdit.component';
import AuthDetails from '../../components/authDetails/authDetails.component';
import AuthDocument from '../../components/authDocuments/authDocuments.component';
import AuthComposition from '../../components/authComposition/authComposition.component';
import dataNodes from '../../data/authorization.json';

import './authAdminPage.component.scss';

class AuthAdmin extends Component {
  constructor(props) {
    super(props)
    this.state= {
      inputVal: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSearchClick = (e) => {
    console.log(this.state.inputValue);
  }

  render() {
    return (
      <main className="container-fluid">
        <div className="main-content">
        <div className="search">
            <FormInput 
              handleChange={this.handleChange}
              handleSearchClick={this.handleSearchClick}
            />
            <AuthEdit dataNodes={dataNodes}/>
          </div>
          <AuthDetails />
          <AuthDocument />
          <AuthComposition />
        </div>
      </main>
    )
  }
};

export default AuthAdmin;
