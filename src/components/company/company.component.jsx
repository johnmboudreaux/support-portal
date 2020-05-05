import React from 'react';
import { connect } from "react-redux";
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from "../customButton/customButton.component";
import FormInput from '../form-input/form-input.component';

import './company.styles.scss';

const Company = ({ patient }) => {
  const handleClick = () => {
    console.log('company clicked');
  }

  const handleChange = (event) => {
    console.log('company changed');
    console.log(event.target.value);
  }

  return (
    <div className="company">
      <FormInput
        htmlFor="Company"
        label="Company:"
        placeholder={patient.company}
        onChange={handleChange}
        name='Company'
      />
      <Button
        className="company-btn"
        icon={<FaSearch />}
        onClick={handleClick}
      />
    </div>
  )
}

Company.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  icon: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  patient: PropTypes.object,
  placeholder: PropTypes.string
}

const mapStateToProps = (state) => ({
  patient: state.patient
});

export default connect(mapStateToProps)(Company);