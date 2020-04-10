import React from 'react';
import CustomButton from '../customButton/customButton.component';
import { Table } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import './authTable.styles.scss';

const AuthTable = () => (
  <div className="table-wrapper">
  <Table className="container auth-table" striped bordered hover variant="dark">
  <thead>
    <tr>
      <th></th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>DOB</th>
      <th>Job Number</th>
      <th>Reason</th>
      <th>Company</th>
      <th>Status</th>
      <th>Last Updated</th>
      <th>Visit Date</th>
      <th>Active</th>
    </tr>
  </thead>
  {/* <tbody>
    <tr>
      <td valign="center"><CustomButton><FaEdit /></CustomButton></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>8/22/1979</td>
      <td>678</td>
      <td>Pre-Employment</td>
      <td>Prime</td>
      <td>Clinic - In Progress</td>
      <td>9/24/2019 10:16:08 PM</td>
      <td>9/24/2019</td>
    </tr>
    <tr>
      <td><CustomButton><FaEdit /></CustomButton></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>8/22/1979</td>
      <td>678</td>
      <td>Pre-Employment</td>
      <td>Prime</td>
      <td>Clinic - In Progress</td>
      <td>9/24/2019 10:16:08 PM</td>
      <td>9/24/2019</td>
    </tr>
    <tr>
      <td><CustomButton><FaEdit /></CustomButton></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>8/22/1979</td>
      <td>678</td>
      <td>Pre-Employment</td>
      <td>Prime</td>
      <td>Clinic - In Progress</td>
      <td>9/24/2019 10:16:08 PM</td>
      <td>9/24/2019</td>
    </tr>
    <tr>
      <td><CustomButton><FaEdit /></CustomButton></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>8/22/1979</td>
      <td>678</td>
      <td>Pre-Employment</td>
      <td>Prime</td>
      <td>Clinic - In Progress</td>
      <td>9/24/2019 10:16:08 PM</td>
      <td>9/24/2019</td>
    </tr>
    <tr>
      <td><CustomButton><FaEdit /></CustomButton></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>8/22/1979</td>
      <td>678</td>
      <td>Pre-Employment</td>
      <td>Prime</td>
      <td>Clinic - In Progress</td>
      <td>9/24/2019 10:16:08 PM</td>
      <td>9/24/2019</td>
    </tr>
    <tr>
      <td><CustomButton><FaEdit /></CustomButton></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>8/22/1979</td>
      <td>678</td>
      <td>Pre-Employment</td>
      <td>Prime</td>
      <td>Clinic - In Progress</td>
      <td>9/24/2019 10:16:08 PM</td>
      <td>9/24/2019</td>
    </tr>
    <tr>
      <td><CustomButton><FaEdit /></CustomButton></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>8/22/1979</td>
      <td>678</td>
      <td>Pre-Employment</td>
      <td>Prime</td>
      <td>Clinic - In Progress</td>
      <td>9/24/2019 10:16:08 PM</td>
      <td>9/24/2019</td>
    </tr>
    <tr>
      <td><CustomButton><FaEdit /></CustomButton></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>8/22/1979</td>
      <td>678</td>
      <td>Pre-Employment</td>
      <td>Prime</td>
      <td>Clinic - In Progress</td>
      <td>9/24/2019 10:16:08 PM</td>
      <td>9/24/2019</td>
    </tr>
  </tbody> */}
</Table>
<div className="waiting-for-search container"><h3>Search for an authorization number...</h3></div>
</div>
);

export default AuthTable;