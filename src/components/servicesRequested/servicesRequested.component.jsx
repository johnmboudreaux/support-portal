import React from 'react';
import Button from '../customButton/customButton.component';
import { FaEdit } from 'react-icons/fa';

import './servicesRequested.styles.scss';

const ServicesRequested = () => (
  <div className="services-requested container">
    <div className="row">
      <div className="col-6">
        <div className=" row">
          <h5 className="title">Services Requested</h5>
          <Button><FaEdit /></Button>
        </div>
      </div>
      <div className="col-6">
        <h5>Reviewer Comments</h5>
        <p></p>
      </div>
    </div>
  </div>
);

export default ServicesRequested;