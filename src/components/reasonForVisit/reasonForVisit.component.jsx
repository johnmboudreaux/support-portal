import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reasonForVisitActions from '../../redux/actions/reasonForVisit.action';
import * as patientActions from '../../redux/actions/patient.action';
import PropTypes from 'prop-types';

import Label from '../label/label.component';

import './reasonForVisit.styles.scss';

class ReasonForVisit extends Component {
  componentDidMount() {
    this.props.actions.loadReasonsForVisit();
  }

  populateOptions = () => {
    if (this.props.reasonsForVisit) {
      return this.props.reasonsForVisit.map((reason, idx) => {
        return (
          <option key={reason.TestReasonID} value={reason.TestReasonName}>
            {reason.TestReasonName}
          </option>
        );
      });
    }
  };

  handleReasonSelectChange = (e) => {
    this.props.patientActions.setPatientReason(e.target.value);
  };

  render() {
    return (
      <div className='reason-for-visit row'>
        <strong className='col-5'>
          <Label>Reason For Visit:</Label>
        </strong>
        <div className='col-7'>
          <select
            onChange={this.handleReasonSelectChange}
            className='reason-for-visit-select'
            name='Reason For Visit'
            id='reason-select'
            value={
              this.props.patient && this.props.patient.reason
                ? this.props.patient.reason
                : ''
            }>
            {this.populateOptions()}
          </select>
        </div>
      </div>
    );
  }
}

ReasonForVisit.propTypes = {
  actions: PropTypes.object,
  patient: PropTypes.object,
  patientActions: PropTypes.object,
  reasonsForVisit: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    patient: state.patient,
    reasonsForVisit: state.reasonsForVisit,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(reasonForVisitActions, dispatch),
  patientActions: bindActionCreators(patientActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReasonForVisit);
