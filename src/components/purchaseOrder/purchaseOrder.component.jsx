import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as purchaseOrderActions from '../../redux/actions/purchaseOrder.action';
import PropTypes from 'prop-types';
// import { FaSearch } from 'react-icons/fa';
import { Typeahead } from 'react-bootstrap-typeahead';

// import Button from '../customButton/customButton.component';
import Label from '../label/label.component';

import './purchaseOrder.styles.scss';

class PurchaseOrder extends Component {
  constructor(props) {
    super(props);
    this.purchaseOrderObj = this.props.actions.setPurchaseOrder();
  }

  handleClick = () => {
    console.log('purchase order clicked');
  };

  render() {
    return (
      <div className='purchase-order row'>
        <strong className='col-5'>
          <Label htmlFor='Company'>Purchase Order:</Label>
        </strong>
        <div className='purchase-order-input-content col-7'>
          <Typeahead
            htmlFor='Purchase Order'
            id='purchase-order-input'
            label='Purchase Order:'
            name='Purchase Order'
            options={this.purchaseOrderObj.purchaseOrder}
            placeholder={this.props.patient.poNum}
          />
          {/* <Button
            className='po-btn'
            icon={<FaSearch />}
            onClick={this.handleClick}
          /> */}
        </div>
      </div>
    );
  }
}

PurchaseOrder.propTypes = {
  actions: PropTypes.object,
  patient: PropTypes.object,
  purchaseOrder: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
  purchaseOrder: state.purchaseOrder,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(purchaseOrderActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrder);
