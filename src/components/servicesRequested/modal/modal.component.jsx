import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import Button from '../../customButton/customButton.component';
import CustomCheckBox from "../../checkbox/customCheckBox.component";
import CustomLabel from '../../label/label.component';

import serviceNodes from '../../../data/services.json';
import './modal.styles.scss';

const CustomModal = ({ handleChange, state }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FaEdit />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Services Requested</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {serviceNodes.map(node => {
            if(state.includes(node.name)) {
              return (
                <div key={node.id}>
                  <CustomCheckBox 
                    checked={true}
                    onChange={handleChange}
                    name={node.name}
                    type="checkbox" 
                    id="service" 
                  />
                  <CustomLabel htmlFor="service">{node.name}</CustomLabel>
                </div>
              )
            } else {
            return (
              <div key={node.id}>
                <CustomCheckBox 
                  checked={false}
                  onChange={handleChange}
                  name={node.name}
                  type="checkbox" 
                  id="service" 
                />
                <CustomLabel htmlFor="service">{node.name}</CustomLabel>
                </div>
              )
            }
            
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
