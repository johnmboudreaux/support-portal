import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Label from '../label/label.component';
import SingleDatePickerWrapper from '../singleDatePicker/singleDatePicker.component';

import './visitDate.styles.scss';

const VisitDate = ({ patient }) => {
  return (
    <div className='visit-date row'>
      <strong className='col-5'>
        <Label>Date of Visit:</Label>
      </strong>
      <div className='col-7'>
        <SingleDatePickerWrapper
          className='single-date'
          placeholderText={patient.visitDate}
        />
      </div>
    </div>
  );
};

VisitDate.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps)(VisitDate);
