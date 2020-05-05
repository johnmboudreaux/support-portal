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
      {/* <Label><strong>Job#:</strong></Label> */}
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
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  icon: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  patient: PropTypes.object,
  placeholder: PropTypes.string
}

const mapStateToProps = (state) => ({
    patient: state.patient
});

export default connect(mapStateToProps)(PurchaseOrder);
