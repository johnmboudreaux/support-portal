import React from 'react';
import { connect } from "react-redux";
import { FaSearch } from 'react-icons/fa';
import Button from "../customButton/customButton.component";
import FormInput from '../form-input/form-input.component';
import Label from '../label/label.component';


const Company = ({ patient }) => {
  const handleClick = () => {
    console.log('company clicked');
  }

  const handleChange = (event) => {
    console.log('company changed');
    console.log(event.target.value);
  }

  return (
    <div>
      <Label><strong>Company:</strong></Label>
      <FormInput
        placeholder={patient.company}
        onChange={handleChange}
        name='Company'
        buttonIcon={<FaSearch />}
        onClick={handleClick}
      />
      <Button onClick={handleClick}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  patient: state.patient
});

export default connect(mapStateToProps)(Company);