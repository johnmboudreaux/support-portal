import React from 'react';
import Button from '../customButton/customButton.component';
import { FaSearch } from 'react-icons/fa';

import './search.styles.scss';

const Search = ({ handleChange, handleSubmit, placeholder }) => {
  return (
    <form 
      className="authorization-search"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <Button icon={<FaSearch />}/>
    </form>
  );
}

export default Search;
