import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as jobNumberActions from '../../redux/actions/jobNumber.action';
import { Typeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

import Label from '../label/label.component';

import './jobNumber.styles.scss';

class JobNumber extends Component {
  constructor(props) {
    super(props);
    this.jobsObj = this.props.actions.setJobNumbers();
  }

  render() {
    return (
      <div className='job-number row'>
        <strong className='col-3'>
          <Label htmlFor='Job Number'>Job #:</Label>
        </strong>
        <div className='job-number-input-contents col-9'>
          <Typeahead
            id='job-number-input'
            name='Job'
            options={this.jobsObj.jobs}
            placeholder={this.props.patient.jobNumber}
          />
        </div>
      </div>
    );
  }
}

JobNumber.propTypes = {
  patient: PropTypes.object,
  jobs: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
  jobs: state.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(jobNumberActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobNumber);
