import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reasonForVisitActions from '../../redux/actions/reasonForVisit.action';
import PropTypes from 'prop-types';

import Label from '../label/label.component';

import './reasonForVisit.styles.scss';

class ReasonForVisit extends Component {
  populateOptions = (array) => {
    if (array) {
      return array.map((reason, idx) => {
        return <option key={idx}>{reason.TestReasonName}</option>;
      });
    }
  };

  render() {
    return (
      <div className='reason-for-visit row'>
        <strong className='col-5'>
          <Label>Reason For Visit:</Label>
        </strong>
        <div className='col-7'>
          <select
            className='reason-for-visit-select'
            name='Reason For Visit'
            id='reason-select'>
            {this.populateOptions(this.props.reasonsForVisit)}
          </select>
        </div>
      </div>
    );
  }
}

ReasonForVisit.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
  reasonsForVisit: state.reasonsForVisit,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(reasonForVisitActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReasonForVisit);
