import React, { Component } from 'react';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import moment from 'moment';

class SingleDatePickerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: moment(),
      calendarFocused: false
    };
  }

  onDateChange = (createdAt) => {
    this.setState({ createdAt });
  }

  onFocusChange = ({ focused }) => {
    this.setState({
      calendarFocused: focused
    });
  }

  render() {
    return (
      <div>
        <SingleDatePicker
          placeholder={this.props.placeholder}
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          id="SDP"
        />
      </div>
    );
  }
}

export default SingleDatePickerWrapper;