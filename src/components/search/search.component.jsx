import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../customButton/customButton.component';
import { FaSearch } from 'react-icons/fa';
// import StatusSelect from '../../components/statusSelect/statusSelect.component';

import './search.styles.scss';

const Search = ({ handleChange }) => {

  // const handleChange = () => {
  //   console.log('changed');
    
  // }

  const handleSearchClick = () => {
    console.log('clicked');
    
  }

  return <div className="search">
    <FormInput
      onChange={handleChange}
      // onClick={handleSearchClick}
      placeholder='Search for Authorization'
    />
    <Button onClick={handleSearchClick} variant="outline-secondary"><FaSearch /></Button>
    {/* <StatusSelect /> */}
  </div>
};

export default Search;
