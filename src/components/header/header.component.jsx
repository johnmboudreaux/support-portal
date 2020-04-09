import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { FaTachometerAlt, FaChartLine, FaCog, FaCogs, FaRegChartBar, FaShieldAlt, FaLock } from 'react-icons/fa';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <div className="header-brand">
      <a href="#"><img src={require("../../assets/images/prime_transparent_logo.png")} alt=""/></a>
    </div>
    <div className="header-nav">
      <ul>
        <li><FaTachometerAlt /><a href="#">Dashboard</a></li>
        <li><FaChartLine /><a href="#">Financials</a></li>
        <li><FaRegChartBar /><a href="#">Reports</a></li>
        <li><FaCog /><a href="#">Administration</a></li>
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