import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import BillingGroup from '../billingGroup/billingGroup.component';
import Button from '../customButton/customButton.component';
import CheckInStatus from '../checkInStatus/checkInStatus.component';
import Clinic from '../clinic/clinic.component';
import Company from "../company/company.component";
import JobNumber from '../jobNumber/jobNumber.component';
import Label from '../label/label.component';
import PatientInfo from '../patientInfo/patientInfo.component';
import Provider from '../provider/provider.component';
import PurchaseOrder from "../purchaseOrder/purchaseOrder.component";
import Reason from '../reason/reason.component';
import VisitDate from '../visitDate/visitDate.component';

import './authDetails.styles.scss';

class AuthDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    }
  }

  handleClick = () => {
    this.setState({
      disabled: !this.state.disabled
    })
  }

  render() {
    return (
        <div 
          className="auth-details-wrapper"
          key={`${this.props.authorizationPatientId}`}
        >
          <header>
            <h5>
              Authorization {`${this.props.authorizationPatientId} `} Details
            </h5>
            <Button 
              className="edit-authorization-btn"
              icon={<FaEdit />}
              onClick={this.handleClick}
              type="submit"
            />
          </header>
          <div className="auth-details-content container">
            <div className="row">
              <PatientInfo />
              <div className="employer-info col-4">
                <h5>Employer Info</h5>
                <Company disabled={this.state.disabled} />
                <JobNumber />
                <div><Label><strong>Authorizing Rep:</strong></Label>{` ${this.props.patient.authRep}`}</div>
                <div><Label><strong>Rep Phone:</strong></Label>{` ${this.props.patient.authRepPhone}`}</div>
                <BillingGroup />
              </div>
              <div className="visit-info col-4">
                <h5>Visit Info</h5>
                <Reason />
                <VisitDate />
                <PurchaseOrder />
                <Clinic />
                <Provider />
                <CheckInStatus />
              </div>
            </div>
          </div>
        </div>
    );
  }
};

AuthDetails.propTypes = {
  patient: PropTypes.object,
}

const mapStateToProps = (state) => ({
    patient: state.patient
});

export default connect(mapStateToProps)(AuthDetails);
