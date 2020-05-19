import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as providerActions from '../../redux/actions/provider.action';
import { Typeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

import Label from '../label/label.component';

import './provider.styles.scss';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.providerObj = this.props.actions.setProviders();
  }

  render() {
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
            options={this.providerObj.providers}
            placeholder={this.props.patient.provider}
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(providerActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Provider);
