import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => (
  <div className="container group">
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary"><FaSearch /></Button>
      </InputGroup.Append>
    </InputGroup>
  </div>
);

export default FormInput;
