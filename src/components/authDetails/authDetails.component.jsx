import React from 'react';
import { connect } from 'react-redux';
import { Form, Col } from 'react-bootstrap';
import { FaEdit, FaSearch } from 'react-icons/fa';
import BillingGroup from '../billingGroup/billingGroup.component';
import Button from '../customButton/customButton.component';
import Label from '../label/label.component';
import Company from "../company/company.component";
import FormInput from '../form-input/form-input.component';
import JobNumber from '../jobNumber/jobNumber.component';
import SingleDatePickerWrapper from '../singleDatePicker/singleDatePicker.component';

import './authDetails.styles.scss';

const AuthDetails = ({ patient }) => {
  const handleClick = (event) => {
    event.preventDefault();
    // event.preventDefault();
    console.log(event.target.value);
  }
  const handleChange = (event) => {
    console.log(event.target.value);
    // event.preventDefault();
  }

  if(patient) {
    return (
        <div 
          className="auth-details-wrapper"
          key={`${patient.authorizationPatientId}`}
        >
          <header><h5>Authorization {`${patient.authorizationPatientId} `} Details</h5></header>
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
                <div><strong>Name:</strong>{` ${patient.firstName} ${patient.lastName}`}</div>
                <div><strong>SSN:</strong>{` ${patient.ssn}`}</div>
                <div><strong>Date Of Birth:</strong> {`${patient.dob}`}</div>
                <div><strong>Phone:</strong> {` ${patient.phone}`}</div>
              </div>
              <div className="employer-info col-4">
                <h5>Employer Info</h5>
                <Company />
                <JobNumber />
                <div><Label><strong>Authorizing Rep:</strong></Label>{` ${patient.authRep}`}</div>
                <div><Label><strong>Rep Phone:</strong></Label>{` ${patient.authRepPhone}`}</div>
                <BillingGroup />
              </div>
              <div className="visit-info col-4">
                <h5>Visit Info</h5>
                <div className="reason">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label><strong>Reason for Visit:</strong></Form.Label>
                    <Form.Control as="select" defaultValue={`${patient.reason}`}>
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="visit-date">
                  <Label><strong>Date of Visit:</strong></Label>
                  <SingleDatePickerWrapper placeholderText={patient.visitDate}/>
                </div>
                <div className="purchase-order">
                  <Label><strong>Purchase Order:</strong></Label>
                  <FormInput
                    placeholder={patient.poNum}
                    onChange={handleChange}
                    name='purchase-order'
                  />
                  <Button
                    icon={<FaSearch />}
                    onClick={handleClick}
                    type='submit'
                  />
                </div>
                <div className="clinic">
                  <Label><strong>Clinic:</strong></Label>
                  <FormInput
                    placeholder={patient.clinic}
                    onChange={handleChange}
                    name='clinic'
                  />
                  <Button onClick={handleClick} icon={<FaSearch />}/>
                </div>
                <div className="provider">
                  <Label><strong>Provider:</strong></Label>
                  <FormInput
                    placeholder={patient.provider}
                    onChange={handleChange}
                    name='provider'
                  />
                  <Button onClick={handleClick} icon={<FaSearch />}/>
                </div>
                <div className="check-in-status">
                  <Label><strong>Check in Status:</strong></Label>
                  <FormInput
                    placeholder={patient.status}
                    onChange={handleChange}
                    name="status"
                  />
                  <Button onClick={handleClick} icon={<FaSearch />}/>
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
