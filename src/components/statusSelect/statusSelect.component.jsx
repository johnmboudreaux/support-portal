import React from 'react';


import './statusSelect.styles.scss';

const StatusSelect = () => {  
  return (
    <div className="status">
      <div>
        <span>Status:</span>
        <select>
          <option>Clinic - In Progress</option>
          <option>Apples</option>
          <option>Bananas</option>
          <option>Grapes</option>
          <option>Oranges</option>
        </select>
      </div>
    </div>
  )
};

export default StatusSelect;
