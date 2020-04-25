import React from 'react';

import './label.styles.scss';

const CustomLabel = ({ htmlFor, ...otherProps }) => (
  <label htmlFor={htmlFor} {...otherProps}></label>
);

export default CustomLabel;
