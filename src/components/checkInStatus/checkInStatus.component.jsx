import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as checkInActions from '../../redux/actions/checkInStatuses.action';
import { Typeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

import Label from '../label/label.component';

import './checkInStatus.styles.scss';

class CheckInStatus extends Component {
  constructor(props) {
    super(props);
    this.checkInObj = this.props.actions.setCheckinStatuses();
  }

  render() {
    return (
      <div className='check-in-status row'>
        <strong className='col-5'>
          <Label htmlFor='Check in Status'>Check In Status:</Label>
        </strong>
        <div className='check-in-input-content col-7'>
          <Typeahead
            htmlFor='Check In Status'
            id='check-in-status'
            label='Check In Status:'
            name='Check In Status'
            options={this.checkInObj.checkInStatuses}
            placeholder={this.props.patient.status}
          />
        </div>
      </div>
    );
  }
}

CheckInStatus.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(checkInActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckInStatus);
