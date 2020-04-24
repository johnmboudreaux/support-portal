import React from 'react';
import Button from '../customButton/customButton.component';
import { ListGroup } from 'react-bootstrap';
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
        <div className="requested-service-list">
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div className="col-6">
        <h5>Reviewer Comments</h5>
        <p className="reviewer-comments">Reviewer comments will go here, wherver they may be, whenver they may be at, here they will be, nowhere else ever in the world of ever</p>
      </div>
    </div>
  </div>
);

export default ServicesRequested;