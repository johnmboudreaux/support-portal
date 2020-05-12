import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from '../customButton/customButton.component';
import EmployerInfo from '../employerInfo/employerInfo.component';
import PatientInfo from '../patientInfo/patientInfo.component';
import VisitInfo from '../visitInfo/visitInfo.component';

import './authDetails.styles.scss';

class AuthDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointerEvent: 'none',
    };
  }

  handleClick = (event) => {
    const targ = document.querySelector('.auth-details-content');

    if (this.state.pointerEvent === 'none') {
      targ.classList.toggle('auth-details-content-gate');
      this.setState({
        pointerEvent: 'all',
      });
    } else if (this.state.pointerEvent === 'all') {
      targ.classList.toggle('auth-details-content-gate');
      this.setState({
        pointerEvent: 'none',
      });
    }
  };

  render() {
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
            className='edit-authorization-btn'
            icon={<FaEdit />}
            onClick={this.handleClick}
            type='submit'
          />
        </header>
        <div className='auth-details-content auth-details-content-gate container'>
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
});

export default connect(mapStateToProps)(AuthDetails);
