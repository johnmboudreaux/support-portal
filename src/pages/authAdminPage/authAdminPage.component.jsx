import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import AuthEdit from '../../components/authEdit/authEdit.component';

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
          <FormInput 
            handleChange={this.handleChange}
            handleSearchClick={this.handleSearchClick}
          />
          <AuthEdit />
        </div>
      </main>
    )
  }
};

export default AuthAdmin;
