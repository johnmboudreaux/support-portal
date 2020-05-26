import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as visitDateActions from '../../redux/actions/visitDate.action';
import PropTypes from 'prop-types';
import Label from '../label/label.component';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './visitDate.styles.scss';

class VisitDate extends Component {
  state = {
    startDate: false,
  };

  handleChange = (date, e, value) => {
    this.setState(
      {
        startDate: date,
      },
      () => {
        return this.props.actions.setSelectedDate(this.state);
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
            onChange={this.handleChange}
            placeholderText={this.props.patient.visitDate}
            selected={this.state.startDate}
          />
        </div>
      </div>
    );
  }
}

VisitDate.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(visitDateActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisitDate);
