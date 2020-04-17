import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import StatusSelect from '../../components/statusSelect/statusSelect.component';
import AuthDetails from '../../components/authDetails/authDetails.component';
import AuthDocument from '../../components/authDocuments/authDocuments.component';
import AuthComposition from '../../components/authComposition/authComposition.component';
import dataNodes from '../../data/authorization.json';

import './authAdminPage.component.scss';

class AuthAdmin extends Component {
  constructor(props) {
    super(props)
    this.state= {
      inputVal: '',
      data: dataNodes
    }
  }

  handleChange = (event) => {
      this.setState({inputVal: event.target.value});
  }

  handleSearchClick = () => {
    const targetNode = this.findTarget();
    
    this.setState({data: targetNode});
  }

  findTarget = () => {
    const targetNode = dataNodes.find(node => {
      if (node.authorizationPatientId === this.state.inputVal) {
        return node
      };
    });
    return targetNode;
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
            <StatusSelect dataNodes={dataNodes}/>
          </div>
          <AuthDetails
            findTarget={this.findTarget}
          />
          <AuthDocument />
          <AuthComposition />
        </div>
      </main>
    )
  }
};

export default AuthAdmin;
