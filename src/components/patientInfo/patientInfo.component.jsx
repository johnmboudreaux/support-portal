import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './patientInfo.styles.scss';

const PatientInfo = ({ patient }) => {
  return (
    <div className="patient-info col-4">
      <div className="patient-info-title">
        <h5>Patient Info</h5>
      </div>
      <div><strong>Name:</strong>{` ${patient.firstName} ${patient.lastName}`}</div>
      <div><strong>SSN:</strong>{` ${patient.ssn}`}</div>
      <div><strong>Date Of Birth:</strong> {`${patient.dob}`}</div>
      <div><strong>Phone:</strong> {` ${patient.phone}`}</div>
    </div>
  );
}


PatientInfo.propTypes = {
  patient: PropTypes.object
}

const mapStateToProps = (state) => ({
  patient: state.patient
});

export default connect(mapStateToProps)(PatientInfo);
