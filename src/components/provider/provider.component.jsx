import React from 'react';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Button from '../customButton/customButton.component';
import FormInput from '../form-input/form-input.component';

import './provider.styles.scss';

const Provider = ({ patient }) => {
  const handleClick = () => {
    console.log('provider clicked');
    
  }

  const handleChange = (e) => {
    console.log('provider changed');
  }

  return ( 
    <div className="provider">
      <FormInput
        htmlFor="Provider"
        label="Provider:"
        placeholder={patient.provider}
        onChange={handleChange}
        name='Provider'
      />
      <Button
        className="provider-btn"
        icon={<FaSearch />}
        onClick={handleClick}
      />
    </div>
  );
};

Provider.propTypes = {
  patient: PropTypes.object
}

const mapStateToProps = (state) => ({
    patient: state.patient
});

export default connect(mapStateToProps)(Provider);
