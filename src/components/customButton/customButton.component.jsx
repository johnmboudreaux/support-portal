import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './customButton.styles.scss';

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      value: '',
    }
  }

  static defaultProps = {
    iconPosition : 'before'
  };

  // handleMouseEnter = ()=>{
  //   console.log('entered');
    
  //   this.setState({ opacity: 0.7 });
  // }

  // handleMouseLeave = ()=>{
  //   this.setState({ opacity: 1 });
  // }

  handleChange = (e)=>{
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div>
        <button
          className={this.props.className}
          // onMouseEnter = {this.handleMouseEnter}
          // onMouseLeave = {this.handleMouseLeave}
        >
          <span>{this.props.icon}</span>{this.props.label}
        </button>
      </div>
    );
  }
};

CustomButton.propTypes = {
    backgroundColor : PropTypes.string,
    label : PropTypes.string,
    iconPosition : PropTypes.string,
    className : PropTypes.string,
    fullWidth : PropTypes.bool,
    icon : PropTypes.node,
}

export default CustomButton;