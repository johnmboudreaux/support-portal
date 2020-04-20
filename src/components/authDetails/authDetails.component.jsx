import React from 'react';
import { Form, Col } from 'react-bootstrap';
import Button from '../../components/customButton/customButton.component';
import FormInput from '../form-input/form-input.component';
import { FaEdit } from 'react-icons/fa';

import './authDetails.styles.scss';

const AuthDetails = ({ findTarget }) => {
  const targetNode = findTarget();
  if(targetNode) {
    return (
        <div 
          className="auth-details-wrapper"
          key={`${targetNode.authorizationPatientId}`}
        >
          <header><h5>Authorization {`${targetNode.authorizationPatientId} `} Details</h5></header>
          <div className="auth-details-content">
            <div className="patient-info">
              <h5>Patient Info <Button type="submit"><FaEdit /></Button></h5>
              <div><strong>Name:</strong>{` ${targetNode.firstName} ${targetNode.lastName}`}</div>
              <div><strong>SSN:</strong>{` ${targetNode.ssn}`}</div>
              <div><strong>Date Of Birth:</strong> {`${targetNode.dob}`}</div>
              <div><strong>Phone:</strong> {` ${targetNode.phone}`}</div>
            </div>
            <div className="employer-info">
              <h5>Employer Info</h5>
              <div className="company">
                <strong>Company:</strong>
                <FormInput placeholder={`${targetNode.company}`}/>
              </div>
              <div className="job-number">
                <strong>Job#:</strong>
                <FormInput placeholder={`${targetNode.jobNumber}`}/>
              </div>
              <div><strong>Authorizing Rep:</strong>{` ${targetNode.authRep}`}</div>
              <div><strong>Rep Phone:</strong>{` ${targetNode.authRepPhone}`}</div>
              <div className="billing-group">
                <strong>BillingGroup:</strong>
                <FormInput placeholder={`${targetNode.billingGroup}`}/>
              </div>
            </div>
            <div className="visit-info">
              <h5>Visit Info</h5>
              <div className="reason">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label><strong>Reason for Visit:</strong></Form.Label>
                  <Form.Control as="select" defaultValue={` ${targetNode.reason}`}>
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div><strong>Date of Visit:</strong>{`${targetNode.visitDate}`}</div>
              <div><strong>Purchase Order:</strong>{` ${targetNode.poNum}`}</div>
              <div><strong>Clinic:</strong></div>
              <div><strong>Provider:</strong></div>
              <div><strong>Check in Status:</strong>{` ${targetNode.status}`}</div>
            </div>
          </div>
        </div>
    );
  } else {
    return (
      <div className="auth-details-wrapper">
        <header><h5>Authorization Details</h5></header>
        <div className="auth-details-content">
          <div className="patient-info">
            <h5>Patient Info</h5>
            <div><strong>Name:</strong></div>
            <div><strong>SSN:</strong></div>
            <div><strong>Date Of Birth:</strong></div>
            <div><strong>Phone:</strong></div>
          </div>
          <div className="employer-info">
            <h5>Employer Info</h5>
            <div><strong>Company:</strong></div>
            <div><strong>Job #:</strong></div>
            <div><strong>Authorizing Rep:</strong></div>
            <div><strong>Rep Phone:</strong></div>
            <div><strong>Billing Group:</strong></div>
          </div>
          <div className="visit-info">
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
    );
  }
  
};

export default AuthDetails;
