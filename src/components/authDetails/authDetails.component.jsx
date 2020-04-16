import React from 'react';

import './authDetails.styles.scss';

const AuthDetails = ({ dataNodes, handleSearchClick }) => {
  
  return dataNodes.map(node => {
    return <div key={`${node.authorizationPatientId}`} className="auth-details-wrapper">
      <header><h5>Authorization {`${node.authorizationPatientId} `} Details</h5></header>
      <div className="auth-details-content">
        <div className="patient-info">
          <h5>Patient Info</h5>
          <span>Name:</span><span>{` ${node.firstName} ${node.lastName}`}</span>
          <div>SSN: {` ${node.ssn}`}</div>
          <div>Date Of Birth: {`${node.dob}`}</div>
          <div>Phone: {` ${node.phone}`}</div>
        </div>
        <div className="employer-info">
          <h5>Employer Info</h5>
          <div>Company: {` ${node.company}`}</div>
          <div>Job #: {` ${node.jobNumber}`}</div>
          <div>Authorizing Rep:</div>
          <div>Rep Phone:</div>
          <div>Billing Group:</div>
        </div>
        <div className="visit-info">
          <h5>Visit Info</h5>
          <div>Reason for Visit: {` ${node.reason}`}</div>
          <div>Date of Visit: {`${node.visitDate}`}</div>
          <div>Purchase Order:</div>
          <div>Clinic:</div>
          <div>Provider:</div>
          <div>Check in Status: {` ${node.status}`}</div>
        </div>
      </div>
    </div>
  })
};

export default AuthDetails;
