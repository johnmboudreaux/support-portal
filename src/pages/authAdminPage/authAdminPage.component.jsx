import React, { Component } from 'react';
import { connect } from "react-redux";
import * as InputValActions from '../../redux/actions/authAdmin.action';
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
    this.props.dispatch(InputValActions.setInputVal(this.state.inputVal))
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


const mapStateToProps = (state) => ({
  inputVal: state.inputVal
})

export default connect(mapStateToProps)(AuthAdmin);
