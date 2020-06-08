import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authDetailsActions from '../../redux/actions/authDetails.action';
import PropTypes from 'prop-types';

import { FaEdit, FaSave } from 'react-icons/fa';
import Button from '../customButton/customButton.component';
import EmployerInfo from '../employerInfo/employerInfo.component';
import PatientInfo from '../patientInfo/patientInfo.component';
import VisitInfo from '../visitInfo/visitInfo.component';

import './authDetails.styles.scss';

class AuthDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: false,
    };
  }

  handleClick = (event) => {
    this.setState({
      isBeingEdited: !this.state.isBeingEdited,
    });

    if (this.state.isBeingEdited) {
      this.handleSaveClick();
    } else {
      this.handleEditClick();
    }
  };

  handleEditClick = () => {
    // console.log(this._details_content.classList);
  };

  handleSaveClick = () => {
    this.props.actions.saveAuthDetails(this.props.dateOfVisit);
  };

  render() {
    const { isBeingEdited } = this.state;

    return (
      <div
        className='auth-details-wrapper'
        key={`${this.props.patient.authorizationPatientId}`}>
        <header>
          <h5>
            Authorization {`${this.props.patient.authorizationPatientId} `}{' '}
            Details
          </h5>
          <Button
            className={
              this.state.isBeingEdited
                ? 'save-authorization-btn'
                : 'edit-authorization-btn'
            }
            icon={isBeingEdited ? <FaSave /> : <FaEdit />}
            onClick={this.handleClick}
            type='submit'
          />
        </header>
        <div
          className={`auth-details-content container ${
            isBeingEdited ? '' : 'auth-details-content-gate'
          }`}
          ref={(el) => (this._details_content = el)}>
          {this.props.isFetching ? (
            <div className='auth-details-loading'>boom</div>
          ) : null}
          <div className='row'>
            <PatientInfo />
            <EmployerInfo />
            <VisitInfo />
          </div>
        </div>
      </div>
    );
  }
}

AuthDetails.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
  dateOfVisit: state.dateOfVisit,
  isFetching: state.authDetails.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(authDetailsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthDetails);
