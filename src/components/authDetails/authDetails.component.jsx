import React from 'react';

import './authDetails.styles.scss';

const AuthDetails = ({ findTarget }) => {
  const targetNode = findTarget();
  if(targetNode) {
    return (
        <div key={`${targetNode.authorizationPatientId}`} className="auth-details-wrapper">
          <header><h5>Authorization {`${targetNode.authorizationPatientId} `} Details</h5></header>
          <div className="auth-details-content">
            <div className="patient-info">
              <h5>Patient Info</h5>
              <span>Name:</span><span>{` ${targetNode.firstName} ${targetNode.lastName}`}</span>
              <div>SSN: {` ${targetNode.ssn}`}</div>
              <div>Date Of Birth: {`${targetNode.dob}`}</div>
              <div>Phone: {` ${targetNode.phone}`}</div>
            </div>
            <div className="employer-info">
              <h5>Employer Info</h5>
              <div>Company: {` ${targetNode.company}`}</div>
              <div>Job #: {` ${targetNode.jobNumber}`}</div>
              <div>Authorizing Rep: {` ${targetNode.authRep}`}</div>
              <div>Rep Phone: {` ${targetNode.authRepPhone}`}</div>
              <div>Billing Group: {` ${targetNode.billingGroup}`}</div>
            </div>
            <div className="visit-info">
              <h5>Visit Info</h5>
              <div>Reason for Visit: {` ${targetNode.reason}`}</div>
              <div>Date of Visit: {`${targetNode.visitDate}`}</div>
              <div>Purchase Order: {` ${targetNode.poNum}`}</div>
              <div>Clinic: </div>
              <div>Provider:</div>
              <div>Check in Status: {` ${targetNode.status}`}</div>
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
            <span>Name:</span>
            <div>SSN:</div>
            <div>Date Of Birth:</div>
            <div>Phone:</div>
          </div>
          <div className="employer-info">
            <h5>Employer Info</h5>
            <div>Company:</div>
            <div>Job #: </div>
            <div>Authorizing Rep: </div>
            <div>Rep Phone: </div>
            <div>Billing Group: </div>
          </div>
          <div className="visit-info">
            <h5>Visit Info</h5>
            <div>Reason for Visit: </div>
            <div>Date of Visit: </div>
            <div>Purchase Order: </div>
            <div>Clinic: </div>
            <div>Provider:</div>
            <div>Check in Status: </div>
          </div>
        </div>
      </div>
    );
  }
  
};

export default AuthDetails;
