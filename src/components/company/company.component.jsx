import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as companyActions from '../../redux/actions/company.action';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from "../customButton/customButton.component";
import FormInput from '../form-input/form-input.component';

import './company.styles.scss';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companySearchString: ''
    }
  };

  handleChange = (event) => {
    // console.log('changed');
    this.setState({
      companySearchString: event.target.value
    })
  }

  handleClick = () => {
    this.props.actions.setCompanySearchString(this.state.companySearchString);
  }

  render() {
    return (
      <div className="company">
        <FormInput
          onChange={this.handleChange}
          htmlFor="Company"
          label="Company:"
          name="Company"
          placeholder={this.props.patient.company}
          type="text"
        />
        <Button
          className="company-btn"
          icon={<FaSearch />}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

Company.propTypes = {
  patient: PropTypes.object,
  disabled: PropTypes.bool
}

const mapStateToProps = (state) => ({
  patient: state.patient
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(companyActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Company);
