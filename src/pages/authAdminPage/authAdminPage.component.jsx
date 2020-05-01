import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as inputValActions from '../../redux/actions/authAdmin.action';
import Search from '../../components/search/search.component';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/customButton/customButton.component';
import AuthDetails from '../../components/authDetails/authDetails.component';
import AuthDocument from '../../components/authDocuments/authDocuments.component';
import AuthComposition from '../../components/authComposition/authComposition.component';
import ServicesRequested from'../../components/servicesRequested/servicesRequested.component';

import './authAdminPage.component.scss';

class AuthAdmin extends Component {
  state = {
    inputVal: ''
  }
  
  handleChange = (event) => {
    this.setState({
      inputVal: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.setInputVal(this.state.inputVal);
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


const mapStateToProps = state => ({
  inputVal: state.inputVal
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(inputValActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthAdmin);
