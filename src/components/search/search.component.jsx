import React from 'react';
import Button from '../customButton/customButton.component';
import { FaSearch } from 'react-icons/fa';
// import StatusSelect from '../../components/statusSelect/statusSelect.component';

import './search.styles.scss';

const Search = ({ handleChange, handleSubmit }) => {
  return (
    <form 
      className="authorization-search"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search For Authorizations"
        onChange={handleChange}
      />
      <Button><FaSearch /></Button>
    </form>
  );
}

export default Search;
