import React from 'react';
import { connect } from 'react-redux';
import { Form, Col } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import Label from '../label/label.component';
import Button from '../../components/customButton/customButton.component';
import FormInput from '../form-input/form-input.component';
import SingleDatePickerWrapper from '../singleDatePicker/singleDatePicker.component';

import dataNodes from '../shared/data/authorization.json';
import './authDetails.styles.scss';

const AuthDetails = ({ patient }) => {
  const targetPatient = dataNodes.find(patientNode => {
    return  patientNode.authorizationPatientId === patient.patientId ? patientNode : null;
  });

  if(targetPatient) {
    return (
        <div 
          className="auth-details-wrapper"
          key={`${targetPatient.authorizationPatientId}`}
        >
          <header><h5>Authorization {`${targetPatient.authorizationPatientId} `} Details</h5></header>
          <div className="auth-details-content container">
            <div className="row">
              <div className="patient-info col-4">
                <div className="patient-info-title">
                  <h5>Patient Info</h5>
                  <Button type="submit">
                    <FaEdit />
                  </Button>
                </div>
                <div><strong>Name:</strong>{` ${targetPatient.firstName} ${targetPatient.lastName}`}</div>
                <div><strong>SSN:</strong>{` ${targetPatient.ssn}`}</div>
                <div><strong>Date Of Birth:</strong> {`${targetPatient.dob}`}</div>
                <div><strong>Phone:</strong> {` ${targetPatient.phone}`}</div>
              </div>
              <div className="employer-info col-4">
                <h5>Employer Info</h5>
                <div className="company">
                  <Label><strong>Company:</strong></Label>
                  <FormInput placeholder={`${targetPatient.company}`} />
                </div>
                <div className="job-number">
                  <strong>Job#:</strong>
                  <FormInput placeholder={`${targetPatient.jobNumber}`} />
                </div>
                <div><strong>Authorizing Rep:</strong>{` ${targetPatient.authRep}`}</div>
                <div><strong>Rep Phone:</strong>{` ${targetPatient.authRepPhone}`}</div>
                <div className="billing-group">
                  <strong>BillingGroup:</strong>
                  <FormInput placeholder={`${targetPatient.billingGroup}`}/>
                </div>
              </div>
              <div className="visit-info col-4">
                <h5>Visit Info</h5>
                <div className="reason">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label><strong>Reason for Visit:</strong></Form.Label>
                    <Form.Control as="select" defaultValue={`${targetPatient.reason}`}>
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="visit-date">
                  <strong>Date of Visit:</strong>
                  <SingleDatePickerWrapper placeholderText={targetPatient.visitDate}/>
                </div>
                <div className="purchase-order">
                  <strong>Purchase Order:</strong>
                  <FormInput placeholder={`${targetPatient.poNum}`}/>
                </div>
                <div className="clinic">
                  <strong>Clinic:</strong>
                  <FormInput placeholder={`${targetPatient.clinic}`}/>
                </div>
                <div className="provider">
                  <strong>Provider:</strong>
                  <FormInput placeholder={`${targetPatient.provider}`}/>
                </div>
                <div className="check-in-status">
                  <strong>Check in Status:</strong>
                  <FormInput placeholder={`${targetPatient.status}`}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  } else {
    return (
      <div className="auth-details-wrapper">
        <header><h5>Authorization Details</h5></header>
        <div className="auth-details-content container">
          <div className="row">
            <div className="patient-info col-4">
              <h5>Patient Info</h5>
              <div><strong>Name:</strong></div>
              <div><strong>SSN:</strong></div>
              <div><strong>Date Of Birth:</strong></div>
              <div><strong>Phone:</strong></div>
            </div>
            <div className="employer-info col-4">
              <h5>Employer Info</h5>
              <div><strong>Company:</strong></div>
              <div><strong>Job #:</strong></div>
              <div><strong>Authorizing Rep:</strong></div>
              <div><strong>Rep Phone:</strong></div>
              <div><strong>Billing Group:</strong></div>
            </div>
            <div className="visit-info col-4">
              <h5>Visit Info</h5>
              <div><strong>Reason for Visit:</strong></div>
              <div><strong>Date of Visit:</strong></div>
              <div><strong>Purchase Order:</strong></div>
              <div><strong>Clinic:</strong></div>
              <div><strong>Provider:</strong></div>
              <div><strong>Check in Status:</strong></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
    patient: state.patient
});

export default connect(mapStateToProps)(AuthDetails);
