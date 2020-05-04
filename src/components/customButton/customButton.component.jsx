import React from 'react';
import PropTypes from 'prop-types';

import './customButton.styles.scss';

const CustomButton = ({ className, icon, label, onClick, type }) => (

    <div>
      <button
        className={className}
        type={type}
        onClick={onClick}
      >
        <span>{icon}</span>{label}
      </button>
    </div>

);

CustomButton.propTypes = {
    backgroundColor : PropTypes.string,
    className : PropTypes.string,
    fullWidth : PropTypes.bool,
    icon : PropTypes.node,
    iconPosition : PropTypes.string,
    label : PropTypes.string,
    type: PropTypes.string,
}

export default CustomButton;
