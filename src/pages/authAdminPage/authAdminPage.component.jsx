import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/customButton/customButton.component';
import AuthTable from '../../components/authTable/authTable.component';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

import './authAdminPage.component.scss';

const AuthAdmin =  ({ filterState, handleClick }) => (
    <main className="container-fluid">
      <div className="main-content">
        <div className="search-authorizations">
          <h4>Search Authorizations</h4>
        </div>
        <div className="container-fliud status-selector">
          <h3>Filter by Status</h3>
          <div>
            <input type="checkbox" className="all-statuses" id="all-status-select"/>
            <label htmlFor="all-status-select">Select All Statuses</label>
            {
              <CustomButton 
                onClick={() => handleClick()}
              >
                {
                  filterState ? <FaAngleUp /> : <FaAngleDown />
                }
              </CustomButton>
            }
          </div>
        </div>
        <hr />
        <FormInput />
        <AuthTable />
      </div>
    </main>
);

export default AuthAdmin;