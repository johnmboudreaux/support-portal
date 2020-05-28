import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dateOfVisitActions from '../../redux/actions/dateOfVisit.action';
import PropTypes from 'prop-types';
import Label from '../label/label.component';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './dateOfVisit.styles.scss';

class DateOfVisit extends Component {
  state = {
    startDate: false,
  };

  handleChange = (date) => {
    this.setState(
      {
        startDate: date,
      },
      () => {
        this.props.actions.setDateOfVisit(this.state.startDate);
      }
    );
  };

  render() {
    return (
      <div className='visit-date row'>
        <strong className='col-5'>
          <Label>Date of Visit:</Label>
        </strong>
        <div className='col-7'>
          <DatePicker
            className='single-date'
            dateFormat='MMMM d, yyyy h:mm'
            onChange={this.handleChange}
            placeholderText={this.props.patient.dateOfVisit}
            selected={this.state.startDate}
          />
        </div>
      </div>
    );
  }
}

DateOfVisit.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(dateOfVisitActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateOfVisit);
