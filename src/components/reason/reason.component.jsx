import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Form, Col } from 'react-bootstrap';

import './reason.styles.scss';

const Reason = ({ patient }) => {
  const handleChange = (event) => {
    console.log('reason changed');
    console.log(event.target.value);
  }

  return (
    <div className="reason">
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label><strong>Reason for Visit:</strong></Form.Label>
        <Form.Control onChange={handleChange} as="select" defaultValue={`${patient.reason}`}>
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>
    </div>
  )
}

Reason.propTypes = {
  patient: PropTypes.object
}

const mapStateToProps = (state) => ({
  patient: state.patient
});

export default connect(mapStateToProps)(Reason);