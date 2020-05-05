import React from 'react';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Button from '../customButton/customButton.component';
import FormInput from '../form-input/form-input.component';

import './purchaseOrder.styles.scss';

const PurchaseOrder = ({ patient }) => {
  const handleClick = () => {
    console.log('purchase order clicked');
    
  }

  const handleChange = (e) => {
    console.log('purchase order changed');
  }

  return ( 
    <div className="purchase-order">
      <FormInput
        htmlFor="Purchase Order"
        label="Purchase Order:"
        placeholder={patient.poNum}
        onChange={handleChange}
        name='Purchase Order'
      />
      <Button
        className="po-btn"
        icon={<FaSearch />}
        onClick={handleClick}
      />
    </div>
  );
};

PurchaseOrder.propTypes = {
  patient: PropTypes.object
}

const mapStateToProps = (state) => ({
    patient: state.patient
});

export default connect(mapStateToProps)(PurchaseOrder);
