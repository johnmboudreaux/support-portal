import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as companyActions from '../../redux/actions/company.action';
import { Typeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';
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
        </div>
      </div>
    );
  }
}

Company.propTypes = {
  actions: PropTypes.object,
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
