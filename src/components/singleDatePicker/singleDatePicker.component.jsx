import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './singleDatePicker.styles.scss';

class SingleDatePickerWrapper extends Component {
  state = {
    startDate: false,
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        className={this.props.className}
        onChange={this.handleChange}
        placeholderText={this.props.placeholderText}
        selected={this.state.startDate}
      />
    );
  }
}

export default SingleDatePickerWrapper;
