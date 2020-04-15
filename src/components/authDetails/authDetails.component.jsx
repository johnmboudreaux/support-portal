import React from 'react';

import './authDetails.styles.scss';

const DetailsForAuth = () => (
  <div className="auth-details-wrapper">
    <header><h5>Authorization Details</h5></header>
    <div className="auth-details-content">
      <div className="patient-info">
        <h5>Patient Info</h5>
        <div>Name:</div>
        <div>SSN:</div>
        <div>Date Of Birth:</div>
        <div>Phone:</div>
      </div>
      <div className="employer-info">
        <h5>Employer Info</h5>
        <div>Company:</div>
        <div>Job #:</div>
        <div>Authorizing Rep:</div>
        <div>Rep Phone:</div>
        <div>Billing Group:</div>
      </div>
      <div className="visit-info">
        <h5>Visit Info</h5>
        <div>Reason for Visit:</div>
        <div>Date of Visit:</div>
        <div>Purchase Order:</div>
        <div>Clinic:</div>
        <div>Provider:</div>
        <div>Check in Status:</div>
      </div>
    </div>
  </div>
);

export default DetailsForAuth;
