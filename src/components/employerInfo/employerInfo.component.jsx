import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BillingGroup from '../billingGroup/billingGroup.component';
import Company from '../company/company.component';
import AuthorizingRep from '../authorizingRep/authorizingRep.component';
import JobNumber from '../jobNumber/jobNumber.component';
import RepPhone from '../repPhone/repPhone.component';

import './employerInfo.styles.scss';

const EmployerInfo = ({ patient }) => {
  return (
    <div className='employer-info col-5'>
      <h5>Employer Info</h5>
      <Company />
      <JobNumber />
      <AuthorizingRep />
      <RepPhone />
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
