import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './form-input.styles.scss';

const FormInput = ({ handleChange, handleSearchClick, placeholder }) => {
  
  return (
    <div className="group">
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Search"
          aria-describedby="basic-addon2"
          placeholder={placeholder}
          type="text" 
        />
        <InputGroup.Append>
          <Button variant="outline-secondary"><FaSearch /></Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
};

export default FormInput;
