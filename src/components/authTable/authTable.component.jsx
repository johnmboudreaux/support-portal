import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../customButton/customButton.component';
import dataNodes from '../../data/authorization.json';
import { Table } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import './authTable.styles.scss';

class AuthTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tablePopulated: false
    }
  }

  render() {
    return (
    <div className="table-wrapper">
    {this.state.tablePopulated ?
      <Table className="container auth-table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
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
        {dataNodes.map(node => (
          <tbody key={node.authorizationPatientId}>
            <tr>
              <td valign="center"><CustomButton><FaEdit /></CustomButton></td>
              <td>{node.authorizationPatientId}</td>
              <td>{node.firstName}</td>
              <td>{node.lastname}</td>
              <td>{node.dob}</td>
              <td>{node.jobNumber}</td>
              <td>{node.reason}</td>
              <td>{node.company}</td>
              <td>{node.status}</td>
              <td>{node.lastUpdated}</td>
              <td>{node.visitDate}</td>
              <td>{node.active}</td>
            </tr>
          </tbody>
          ))
        }
        </Table>
        : <div className="waiting-for-search container"><h3>Search for an authorization number...</h3></div>
    }
  </div>
  )};
}

export default withRouter(AuthTable);
