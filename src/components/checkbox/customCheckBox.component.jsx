import React from 'react';
import serviceNodes from '../../data/services.json';

import './customCheckBox.styles.scss';

const CustomCheckBox = ({ htmlFor, id, type, ...otherProps }) => (
  <div>
    {serviceNodes.map(node => (
      <div key={node.id}>
        <input type={type} id={id} className="custom-input" {...otherProps}/>
        <label htmlFor="service">{node.name}</label>
      </div>
    ))}
  </div>
)

export default CustomCheckBox;