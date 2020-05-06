import React from 'react';
import { connect } from "react-redux";
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from "../customButton/customButton.component";
import FormInput from '../form-input/form-input.component';

import './company.styles.scss';

const Company = ({ patient }) => {
  return (
    <div className="company">
      <FormInput
        htmlFor="Company"
        label="Company:"
        name="Company"
        placeholder={patient.company}
        type="text"
      />
      <Button
        className="company-btn"
        icon={<FaSearch />}
      />
    </div>
  )
}

Company.propTypes = {
  patient: PropTypes.object,
  disabled: PropTypes.bool
}

const mapStateToProps = (state) => ({
  patient: state.patient
});

export default connect(mapStateToProps)(Company);
