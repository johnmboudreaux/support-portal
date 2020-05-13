import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Label from '../label/label.component';

import './authorizingRep.styles.scss';

const AuthorizingRep = ({ patient }) => {
  return (
    <div>
      <Label>
        <strong>Authorizing Rep:</strong>
      </Label>
      {` ${patient.authRep}`}
    </div>
  );
};

AuthorizingRep.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps)(AuthorizingRep);
