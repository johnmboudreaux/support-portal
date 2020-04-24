import React from 'react';
import CustomLabel from '../label/label.component';
import serviceNodes from '../../data/services.json';

import './customCheckBox.styles.scss';

const CustomCheckBox = ({ htmlFor, id, type, ...otherProps }) => (
  <div>
    {serviceNodes.map(node => (
      <div key={node.id}>
        <input type={type} id={id} className="custom-input" {...otherProps}/>
        <CustomLabel htmlFor="service">{node.name}</CustomLabel>
      </div>
    ))}
  </div>
)

export default CustomCheckBox;