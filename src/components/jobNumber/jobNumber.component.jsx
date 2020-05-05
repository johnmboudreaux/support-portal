import React from 'react';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Button from '../customButton/customButton.component';
import FormInput from '../form-input/form-input.component';

import './jobNumber.styles.scss';

const JobNumber = ({ patient }) => {
  const handleClick = () => {
    console.log('jobNumber clicked');
    
  }

  const handleChange = (e) => {
    console.log('jobnumber changed');
  }

  return ( 
    <div className="job-number">
      <FormInput
        htmlFor="Job Number"
        label="Job Number:"
        placeholder={patient.jobNumber}
        onChange={handleChange}
        name='Job'
      />
      <Button
        className="job-btn"
        icon={<FaSearch />}
        onClick={handleClick}
      />
    </div>
  );
};

JobNumber.propTypes = {
  patient: PropTypes.object
}

const mapStateToProps = (state) => ({
    patient: state.patient
});

export default connect(mapStateToProps)(JobNumber);
