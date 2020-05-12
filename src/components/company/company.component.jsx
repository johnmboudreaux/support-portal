import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as companyActions from '../../redux/actions/company.action';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from '../customButton/customButton.component';
import FormInput from '../form-input/form-input.component';

import './company.styles.scss';

class Company extends Component {
  constructor(props) {
    super(props);
    this.companyObj = this.props.actions.setCompanies();
    this.state = {
      text: '',
      companySearchString: '',
      suggestions: [],
    };
  }

  handleTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.companyObj.companies
        .sort()
        .filter((v) => regex.test(v));
    }

    this.setState(() => ({
      text: value,
      suggestions,
    }));
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

  handleClick = () => {
    this.props.actions.setCompanySearchString(this.state.companySearchString);
  };

  render() {
    const { text } = this.state;

    return (
      <div className='company'>
        <FormInput
          htmlFor='Company'
          label='Company:'
          name='Company'
          onChange={this.handleTextChange}
          placeholder={this.props.patient.company}
          type='text'
          value={text}
        />
        <Button
          className='company-btn'
          icon={<FaSearch />}
          onClick={this.handleClick}
        />
        <div className='suggestions'>{this.renderSuggestions()}</div>
      </div>
    );
  }
}

Company.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
  companies: state.company,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(companyActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
