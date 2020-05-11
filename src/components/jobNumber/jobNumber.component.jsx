import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as jobNumberActions from '../../redux/actions/jobNumber.action';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Button from '../customButton/customButton.component';
import FormInput from '../form-input/form-input.component';

import './jobNumber.styles.scss';

class JobNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobNumberString: '',
      jobArray: [],
    };
  }

  componentDidMount() {
    const jobs = this.props.actions.setJobNumbers();

    this.setState({
      jobArray: jobs,
    });
  }

  handleChange = (event) => {
    this.setState({
      jobNumberString: event.target.value,
    });
    this.props.actions.setJobNumberString(this.state.jobNumberString);
    console.log(this.props);
  };

  handleClick = () => {};

  render() {
    return (
      <div className='job-number'>
        <FormInput
          htmlFor='Job Number'
          label='Job Number:'
          placeholder={this.props.patient.jobNumber}
          onChange={this.handleChange}
          name='Job'
        />
        <Button
          className='job-btn'
          icon={<FaSearch />}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

JobNumber.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
  jobs: state.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(jobNumberActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobNumber);
