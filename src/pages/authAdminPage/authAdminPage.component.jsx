import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as patientActions from '../../redux/actions/patient.action';
import Button from '../../components/customButton/customButton.component';
import AuthDetails from '../../components/authDetails/authDetails.component';
import AuthDocument from '../../components/authDocuments/authDocuments.component';
import AuthComposition from '../../components/authComposition/authComposition.component';
import ServicesRequested from'../../components/servicesRequested/servicesRequested.component';

import './authAdminPage.component.scss';

class AuthAdmin extends Component {
  state = {
    patientIdInputValue: ''
  }
  
  handleChange = (event) => {
    this.setState({
      patientIdInputValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.setPatientIdVal(this.state.patientIdInputValue);
  }

  render() {
    return (
      <main className="container-fluid">
        <div className="main-content">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <Button>click</Button>
        </form>
          <AuthDetails />
          <ServicesRequested />
          <AuthDocument />
          <AuthComposition />
        </div>
      </main>
    )
  }
};

AuthAdmin.propTypes = {
  setInputVal: PropTypes.object,
  actions: PropTypes.object
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(patientActions, dispatch)
})

export default connect(null, mapDispatchToProps)(AuthAdmin);
