import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clinicActions from '../../redux/actions/clinic.action';
import * as patientActions from '../../redux/actions/patient.action';
import { Typeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

import Label from '../label/label.component';

import './clinic.styles.scss';

class Clinic extends Component {
  componentDidMount() {
    this.props.clinicActions.setClinics();
  }

  handleClinicChange = (ChangedClinic) => {
    this.props.patientActions.setChangedClinic(ChangedClinic);
  };

  render() {
    const { clinics, patient } = this.props;

    return (
      <div className='clinic row'>
        <strong className='col-5'>
          <Label htmlFor='Clinic'>Clinic:</Label>
        </strong>
        <div className='clinic-input-content col-7'>
          <Typeahead
            htmlFor='Clinic'
            id='clinic-input'
            label='Clinic:'
            name='Clinic'
            onChange={this.handleClinicChange}
            options={clinics ? clinics : []}
            placeholder={patient.clinic}
          />
        </div>
      </div>
    );
  }
}

Clinic.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
  clinics: state.clinics,
});

const mapDispatchToProps = (dispatch) => ({
  clinicActions: bindActionCreators(clinicActions, dispatch),
  patientActions: bindActionCreators(patientActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clinic);
