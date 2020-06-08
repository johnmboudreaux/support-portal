import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as providerActions from '../../redux/actions/provider.action';
import * as patientActions from '../../redux/actions/patient.action';
import { Typeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

import Label from '../label/label.component';

import './provider.styles.scss';

class Provider extends Component {
  componentDidMount() {
    this.props.providerActions.setProviders();
  }

  handleProviderChange = (providerToChangeTo) => {
    this.props.patientActions.setChangedProvider(providerToChangeTo);
  };

  render() {
    const { patient, providers } = this.props;

    return (
      <div className='provider row'>
        <strong className='col-5'>
          <Label htmlFor='Provider'>Provider:</Label>
        </strong>
        <div className='provider-input-content col-7'>
          <Typeahead
            htmlFor='Provider'
            id='provider-input'
            label='Provider:'
            name='Provider'
            onChange={this.handleProviderChange}
            options={providers || []}
            placeholder={patient.provider}
          />
        </div>
      </div>
    );
  }
}

Provider.propTypes = {
  patient: PropTypes.object,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
  providers: state.providers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    providerActions: bindActionCreators(providerActions, dispatch),
    patientActions: bindActionCreators(patientActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Provider);
