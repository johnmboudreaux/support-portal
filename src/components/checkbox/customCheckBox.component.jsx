import React from 'react';

import './customCheckBox.styles.scss';

const CustomCheckBox = ({ id, type, ...otherProps }) => (
  <input type={type} id={id} className="custom-input" {...otherProps} />
)

export default CustomCheckBox;
