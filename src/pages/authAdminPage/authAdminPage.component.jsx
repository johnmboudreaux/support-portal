import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as inputValActions from '../../redux/actions/authAdmin.action';
import Search from '../../components/search/search.component';
import AuthDetails from '../../components/authDetails/authDetails.component';
import AuthDocument from '../../components/authDocuments/authDocuments.component';
import AuthComposition from '../../components/authComposition/authComposition.component';
import ServicesRequested from'../../components/servicesRequested/servicesRequested.component';

import './authAdminPage.component.scss';

class AuthAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
    }
  }

  handleChange = (event) => {
    const inputVal = {
      ...this.state.inputVal,
      inputVal: event.target.value
    }

    this.setState({
      inputVal
    })
  }

  handleSearchClick = () => {
    console.log(this.props.actions);
    
    this.props.actions.setInputVal(this.state.inputVal);
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
            inputVal={this.state.inputVal}
          />
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


const mapStateToProps = (state) => ({
  inputVal: state.inputVal
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(inputValActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthAdmin);
