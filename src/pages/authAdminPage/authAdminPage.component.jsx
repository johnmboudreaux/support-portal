import React, { Component } from 'react';
import Search from '../../components/search/search.component';
import AuthDetails from '../../components/authDetails/authDetails.component';
import AuthDocument from '../../components/authDocuments/authDocuments.component';
import AuthComposition from '../../components/authComposition/authComposition.component';
import ServicesRequested from'../../components/servicesRequested/servicesRequested.component';
import dataNodes from '../../components/shared/data/authorization.json';

import './authAdminPage.component.scss';

class AuthAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
    }
    this.stringToSet = '';
  }
  

  handleChange = (event) => {
    this.stringToSet = event.currentTarget.value;
  }

  handleSearchClick = () => {
    const targetNode = this.findTarget();
    const stateInputVal = this.stringToSet;
    
    this.setState({
      data: targetNode,
      inputVal: stateInputVal
    });
  }

  onDatesChange = ({ startDate, endDate }) => { 
    this.setState({ startDate, endDate })
  }

  findTarget = () => {
    const targetNode = dataNodes.find(node => {
      return  node.authorizationPatientId === this.state.inputVal ? node : null;
    });

    return targetNode;
  }

  render() {
    return (
      <main className="container-fluid">
        <div className="main-content">
          <Search 
            handleChange={this.handleChange}
            handleSearchClick={this.handleSearchClick}
          />
          <AuthDetails 
            findTarget={this.findTarget}  
          />
          <ServicesRequested />
          <AuthDocument />
          <AuthComposition />
        </div>
      </main>
    )
  }
};

export default AuthAdmin;
