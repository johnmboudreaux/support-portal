import React from 'react';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Button from '../customButton/customButton.component';
import FormInput from '../form-input/form-input.component';

import './clinic.styles.scss';

const Clinic = ({ patient }) => {
  const handleClick = () => {
    console.log('clinic clicked');
    
  }

  const handleChange = (e) => {
    console.log('clinic changed');
  }

  return ( 
    <div className="clinic">
      <FormInput
        htmlFor="Clinic"
        label="Clinic:"
        placeholder={patient.clinic}
        onChange={handleChange}
        name='Clinic'
      />
      <Button
        className="clinic-btn"
        icon={<FaSearch />}
        onClick={handleClick}
      />
    </div>
  );
};

Clinic.propTypes = {
  patient: PropTypes.object
}

const mapStateToProps = (state) => ({
    patient: state.patient
});

export default connect(mapStateToProps)(Clinic);
