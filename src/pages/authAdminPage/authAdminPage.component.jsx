import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/customButton/customButton.component';
import AuthTable from '../../components/authTable/authTable.component';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

import './authAdminPage.component.scss';

class AuthAdmin extends Component {
  constructor(props) {
    super(props)
    this.state= {
      filterClosed: true
    }
  }

  statusFilterHandler = () => {
    this.setState({
      filterClosed: !this.state.filterClosed
    })
  }

  handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.value.charAt(0).toLowerCase() === 'A'.toLowerCase());
    console.log(e.target.value.charAt(1));
  }

  render() {
    return (
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
                  onClick={() => this.statusFilterHandler()}
                >
                  {
                    this.state.filterClosed ? <FaAngleUp /> : <FaAngleDown />
                  }
                </CustomButton>
              }
            </div>
          </div>
          <hr />
          <FormInput onChange={this.handleChange}/>
          <AuthTable />
        </div>
      </main>
    )
  }
};

export default AuthAdmin;