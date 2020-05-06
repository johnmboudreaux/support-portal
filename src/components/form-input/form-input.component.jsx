import React from 'react';
import PropTypes from 'prop-types';

import './form-input.styles.scss';

const FormInput = ({
  children,
  className,
  disabled,
  error,
  label,
  name,
  onChange,
  placeholder,
  type,
  value,
  ...props
}) => {
  
  return (
    <form>
      <label htmlFor={name}>{label}</label>
      <input
        className={className}
        disabled={disabled}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        style={error && {border: 'solid 1px red'}}
        type={type}
        value={value}
      />
      { error && <p>{ error }</p>}
    </form>
  )
}

FormInput.defaultProps = {
  type: "text",
  className: ""
}

FormInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  type: PropTypes.oneOf(['text', 'number', 'password'])
}

export default FormInput;
