import React from "react";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { FaTachometerAlt, FaChartLine, FaCog, FaCogs, FaRegChartBar, FaShieldAlt, FaLock, FaRegAddressCard } from 'react-icons/fa';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <div className="header-brand">
      <a href="#"><img src={require("../../assets/images/prime_transparent_logo.png")} alt=""/></a>
    </div>
    <div className="header-nav">
      <ul>
        <li><FaTachometerAlt />
            <DropdownButton id="dropdown-basic-button" title="Dashboard">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </li>
        <li><FaRegAddressCard /><a href="#">New Authorization</a></li>
        <li><FaChartLine />
          <DropdownButton id="dropdown-basic-button" title="Financials">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </li>
        <li><FaRegChartBar />
            <DropdownButton id="dropdown-basic-button" title="Reports">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </li>
        <li><FaCog />
            <DropdownButton id="dropdown-basic-button" title="Administration">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </li>
      </ul>
      <div className="user-nav">
        <FaCogs />
        <DropdownButton id="dropdown-basic-button" title="UserName">
          <Dropdown.Item href="#/action-1"><FaShieldAlt />Change Password</Dropdown.Item>
          <Dropdown.Item href="#/action-2"><FaLock />Log Off</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  </div>
);

export default Header;