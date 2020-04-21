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
    super(props);
    this.state = {
      inputVal: '',
      data: dataNodes,
      placeholder: 'Search for Authorization',
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
      const thing = node.authorizationPatientId === this.state.inputVal ? node : undefined;
      return thing;
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
              placeholder={this.state.placeholder}
            />
            <StatusSelect dataNodes={dataNodes}/>
          </div>
          <AuthDetails 
            date={this.state.date}
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
