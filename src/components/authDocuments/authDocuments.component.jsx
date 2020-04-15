import React from 'react';
import Button from '../customButton/customButton.component';
import { FaPlus } from 'react-icons/fa'

import './authDocuments.styles.scss';

const AuthDocuments = () => (
  <div className="auth-documents-wrapper">
    <header><h5>Documents</h5></header>
    <div className="auth-documents-content">
      <Button><FaPlus />Add Document</Button>
    </div>
  </div>
);

export default AuthDocuments;
