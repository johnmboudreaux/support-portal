import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clinicActions from '../../redux/actions/clinic.action';
import { Typeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

import Label from '../label/label.component';

import './clinic.styles.scss';

class Clinic extends Component {
  constructor(props) {
    super(props);
    this.clinicObj = this.props.actions.setClinics();
  }

  render() {
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
            options={this.clinicObj.clinic}
            placeholder={this.props.patient.clinic}
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(clinicActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clinic);
