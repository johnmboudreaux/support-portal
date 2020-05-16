import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as billingGroupActions from '../../redux/actions/billingGroup.action';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from '../customButton/customButton.component';
import Label from '../label/label.component';

import './billingGroup.styles.scss';

class BillingGroup extends Component {
  constructor(props) {
    super(props);
    this.billingGroupObj = this.props.actions.setBillingGroup();
  }

  render() {
    return (
      <div className='billing-group row'>
        <strong className='col-5'>
          <Label htmlFor='Billing Group'>Billing Group:</Label>
        </strong>
        <div className='billing-group-input-content col-7'>
          <Typeahead
            htmlFor='Billing Group'
            id='billing-group-input'
            label='Billing Group:'
            name='billing-group'
            options={this.billingGroupObj.billingGroup}
            placeholder={this.props.patient.billingGroup}
          />
          <Button className='billing-group-btn' icon={<FaSearch />} />
        </div>
      </div>
    );
  }
}

BillingGroup.propTypes = {
  patient: PropTypes.object,
  billingGroup: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
  billingGroup: state.billingGroup,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(billingGroupActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BillingGroup);
