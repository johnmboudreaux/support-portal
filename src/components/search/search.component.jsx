import React from 'react';
import { connect } from "react-redux";
import FormInput from '../../components/form-input/form-input.component';
import StatusSelect from '../../components/statusSelect/statusSelect.component';

import './search.styles.scss';

const Search = ({ handleChange, handleSearchClick }) => (
  <div className="search">
    <FormInput
      handleChange={handleChange}
      handleSearchClick={handleSearchClick}
      placeholder='Search for Authorization'
    />
    <StatusSelect />
  </div>
);

export default connect(null, null)(Search);