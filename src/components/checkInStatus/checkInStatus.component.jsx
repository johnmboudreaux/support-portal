import React from 'react';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Button from '../customButton/customButton.component';
import FormInput from '../form-input/form-input.component';

import './checkInStatus.styles.scss';

const CheckInStatus = ({ patient }) => {
  const handleClick = () => {
    console.log('checkInStatus clicked');
    
  }

  const handleChange = (e) => {
    console.log('checkInStatus changed');
  }

  return ( 
    <div className="check-in-status">
      <FormInput
        htmlFor="Check In Status"
        label="Check In Status:"
        placeholder={patient.status}
        onChange={handleChange}
        name='Check In Status'
      />
      <Button
        className="check-in-status-btn"
        icon={<FaSearch />}
        onClick={handleClick}
      />
    </div>
  );
};

CheckInStatus.propTypes = {
  patient: PropTypes.object
}

const mapStateToProps = (state) => ({
    patient: state.patient
});

export default connect(mapStateToProps)(CheckInStatus);
