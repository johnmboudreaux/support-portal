import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as jobNumberActions from '../../redux/actions/jobNumber.action';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Button from '../customButton/customButton.component';
import FormInput from '../form-input/form-input.component';
import Label from '../label/label.component';

import './jobNumber.styles.scss';

class JobNumber extends Component {
  constructor(props) {
    super(props);
    this.jobsObj = this.props.actions.setJobNumbers();
    this.state = {
      suggestions: [],
      text: '',
    };
  }

  handleTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.jobsObj.jobs.sort().filter((v) => regex.test(v));
    }

    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;

    if (suggestions.length === 0) {
      return null;
    }

    return (
      <ul>
        {suggestions.map((job, idx) => (
          <li onClick={() => this.suggestionSelected(job)} key={idx}>
            {job}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div className='job-number row'>
        <strong className='col-2'>
          <Label htmlFor='Job Number'>Job Number:</Label>
        </strong>
        <div className='job-number-input col-10'>
          <FormInput
            placeholder={this.props.patient.jobNumber}
            onChange={this.handleTextChange}
            name='Job'
            value={text}
          />
          <Button
            className='job-btn'
            icon={<FaSearch />}
            onClick={this.handleClick}
          />
        </div>
        <div className='suggestions'>{this.renderSuggestions()}</div>
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
