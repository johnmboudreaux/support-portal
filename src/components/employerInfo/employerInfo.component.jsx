import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BillingGroup from '../billingGroup/billingGroup.component';
import Company from '../company/company.component';
import JobNumber from '../jobNumber/jobNumber.component';
import Label from '../label/label.component';

import './employerInfo.styles.scss';

const EmployerInfo = ({ patient }) => {
  return (
    <div className='employer-info col-4'>
      <h5>Employer Info</h5>
      <Company />
      <JobNumber />
      <div>
        <Label>
          <strong>Authorizing Rep:</strong>
        </Label>
        {` ${patient.authRep}`}
      </div>
      <div>
        <Label>
          <strong>Rep Phone:</strong>
        </Label>
        {` ${patient.authRepPhone}`}
      </div>
      <BillingGroup />
    </div>
  );
};

EmployerInfo.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps)(EmployerInfo);
