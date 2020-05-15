import React from 'react';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from '../customButton/customButton.component';
import FormInput from '../form-input/form-input.component';

import './billingGroup.styles.scss';

const BillingGroup = ({ patient }) => {
  const handleChange = () => {
    console.log('billing group changed');
  };

  const handleClick = () => {
    console.log('billing group clicked');
  };

  return (
    <div className='billing-group'>
      <FormInput
        htmlFor='Billing Group'
        label='Billing Group:'
        placeholder={patient.billingGroup}
        onChange={handleChange}
        name='billing-group'
      />
      <Button
        className='billing-group-btn'
        onClick={handleClick}
        icon={<FaSearch />}
      />
    </div>
  );
};

BillingGroup.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps)(BillingGroup);
