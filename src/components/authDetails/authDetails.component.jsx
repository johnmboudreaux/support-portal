import React from 'react';
import { connect } from 'react-redux';
import { Form, Col } from 'react-bootstrap';
import { FaEdit, FaSearch } from 'react-icons/fa';
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
    
  }
  const handleChange = (event) => {
    event.preventDefault();
    console.log('changed');
    
  }

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
                  <Button 
                    type="submit"
                    icon={<FaEdit />}
                    className="patient-info-button"
                  />
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
                  <FormInput
                    placeholder={targetPatient.company}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    name='Company'
                  />
                  <Button icon={<FaSearch />}className="company-search-button"/>
                </div>
                <div className="job-number">
                  <Label><strong>Job#:</strong></Label>
                  <FormInput
                    placeholder={targetPatient.jobNumber}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    name='Job'
                  />
                  <Button icon={<FaSearch />}/>
                </div>
                <div><Label><strong>Authorizing Rep:</strong></Label>{` ${targetPatient.authRep}`}</div>
                <div><Label><strong>Rep Phone:</strong></Label>{` ${targetPatient.authRepPhone}`}</div>
                <div className="billing-group">
                  <Label><strong>BillingGroup:</strong></Label>
                  <FormInput
                    placeholder={targetPatient.billingGroup}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    name='billing-group'
                  />
                  <Button icon={<FaSearch />}/>
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
                  <Label><strong>Date of Visit:</strong></Label>
                  <SingleDatePickerWrapper placeholderText={targetPatient.visitDate}/>
                </div>
                <div className="purchase-order">
                  <Label><strong>Purchase Order:</strong></Label>
                  <FormInput
                    placeholder={targetPatient.poNum}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    name='billing-group'
                  />
                  <Button icon={<FaSearch />}/>
                </div>
                <div className="clinic">
                  <Label><strong>Clinic:</strong></Label>
                  <FormInput
                    placeholder={targetPatient.clinic}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    name='clinic'
                  />
                  <Button icon={<FaSearch />}/>
                </div>
                <div className="provider">
                  <Label><strong>Provider:</strong></Label>
                  <FormInput
                    placeholder={targetPatient.provider}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    name='provider'
                  />
                  <Button icon={<FaSearch />}/>
                </div>
                <div className="check-in-status">
                  <Label><strong>Check in Status:</strong></Label>
                  <FormInput
                    placeholder={targetPatient.status}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    name="status"
                  />
                  <Button icon={<FaSearch />}/>
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
