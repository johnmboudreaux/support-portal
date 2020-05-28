import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaEdit, FaSave } from 'react-icons/fa';
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

  handleEditClick = (event) => {
    console.log('editClick');

    const targ = document.querySelector('.auth-details-content');
    const saveBtn = document.querySelector('.save-authorization-btn');
    const editBtn = document.querySelector('.edit-authorization-btn');

    if (this.state.pointerEvent === 'none') {
      targ.classList.toggle('auth-details-content-gate');
      saveBtn.style.display = 'block';
      editBtn.style.display = 'none';
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

  handleSaveClick = () => {
    const targ = document.querySelector('.auth-details-content');
    const saveBtn = document.querySelector('.save-authorization-btn');
    const editBtn = document.querySelector('.edit-authorization-btn');
    targ.classList.toggle('auth-details-content-gate');
    saveBtn.style.display = 'none';
    editBtn.style.display = 'block';
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
            onClick={this.handleEditClick}
            type='submit'
          />
          <Button
            className='save-authorization-btn'
            icon={<FaSave />}
            onClick={this.handleSaveClick}
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
