import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './patientInfo.styles.scss';

const PatientInfo = ({ patient }) => {
  return (
    <div className='patient-info col-4'>
      <div className='patient-info-title'>
        <h5>Patient Info</h5>
      </div>
      <div className='row'>
        <strong className='col-6'>Name:</strong>
        <p className='col-6'>{` ${patient.firstName} ${patient.lastName}`}</p>
      </div>
      <div className='row'>
        <strong className='col-6'>SSN:</strong>
        <p className='col-6'>{` ${patient.ssn}`}</p>
      </div>
      <div className='row'>
        <strong className='col-6'>Date Of Birth:</strong>{' '}
        <p className='col-6'>{`${patient.dob}`}</p>
      </div>
      <div className='row'>
        <strong className='col-6'>Phone:</strong>{' '}
        <p className='col-6'>{` ${patient.phone}`}</p>
      </div>
    </div>
  );
};

PatientInfo.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps)(PatientInfo);
