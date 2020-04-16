import React from 'react';


import './statusSelect.styles.scss';

const StatusSelect = ({ dataNodes }) => {
  console.log(dataNodes);
  
  return (
      <div className="main-content">
        <div className="auth-edit container">
          <div className="status-group">
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
      </div>
  )
};

export default StatusSelect;
