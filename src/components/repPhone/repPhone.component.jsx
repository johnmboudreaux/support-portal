import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Label from '../label/label.component';

import './repPhone.styles.scss';

const RepPhone = ({ patient }) => {
  return (
    <div>
      <Label>
        <strong>Rep Phone:</strong>
      </Label>
      {` ${patient.authRepPhone}`}
    </div>
  );
};

RepPhone.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps)(RepPhone);
