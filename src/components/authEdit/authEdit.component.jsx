import React from 'react';
import AuthDetails from '../../components/authDetails/authDetails.component';
import AuthDocument from '../../components/authDocuments/authDocuments.component';
import AuthComposition from '../../components/authComposition/authComposition.component';

import './authEdit.styles.scss';

const AuthEdit = () => (
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
      <AuthDetails />
      <AuthDocument />
      <AuthComposition />
    </div>
  </main>
);

export default AuthEdit;
