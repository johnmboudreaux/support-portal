import React from 'react';
// import { Button, SplitButton, DropdownType, ButtonGroup, Dropdown } from 'react-bootstrap';
// import { FaSearch } from 'react-icons/fa'

import './editAuthPage.styles.scss';
const EditAuthPage = () => (
  <main className="container-fluid">
    <div className="main-content">
      <div className="edit-page-status-selector container">
        <h4>Details for Authorization 310788</h4>
        <div className="status-group">
          <span>Status:</span>
          <select className="select-css">
            <option>Clinic - In Progress</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
          </select>
        </div>
      </div>
      <hr />
    </div>
  </main>
);

export default EditAuthPage;
