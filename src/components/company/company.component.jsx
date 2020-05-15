import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as companyActions from '../../redux/actions/company.action';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from '../customButton/customButton.component';
import Label from '../label/label.component';

import './company.styles.scss';

class Company extends Component {
  constructor(props) {
    super(props);
    this.companyObj = this.props.actions.setCompanies();
    this.state = {
      companySearchString: '',
    };
  }

  handleClick = () => {
    this.props.actions.setCompanySearchString(this.state.companySearchString);
  };

  render() {
    return (
      <div className='company row'>
        <strong className='col-2'>
          <Label htmlFor='Company'>Company:</Label>
        </strong>
        <div className='company-input-content col-10'>
          <Typeahead
            id='company-input'
            name='Company'
            options={this.companyObj.companies}
            placeholder={this.props.patient.company}
            type='text'
          />
          <Button
            className='company-btn'
            icon={<FaSearch />}
            onClick={this.handleClick}
          />
        </div>
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
