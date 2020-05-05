import React, { Component } from 'react';
import Modal from '../modal/modal.component';
import { ListGroup } from 'react-bootstrap';

import './servicesRequested.styles.scss';

class ServicesRequested extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxValues: []
    }
  }

  handleChange = (event) => {
    const serviceName = event.target.name;

    if (event.target.checked === true) {
      this.setState(prevState => ({
        checkboxValues: [...prevState.checkboxValues, serviceName]
      }))
    } else if (event.target.checked === false) {
        this.setState({
          checkboxValues: this.state.checkboxValues.filter((service) => { 
            return service !== event.target.name;
          })
        });
      }
  }

  render() {  
    return (
      <div className="services-requested-list container">
        <div className="row">
          <div className="col-6">
            <div className=" row">
              <h5 className="title">Services Requested</h5>
              <Modal 
                handleChange={this.handleChange}
                state={this.state.checkboxValues}
              />
            </div>
            <div className="requested-service-list">
              {
                this.state.checkboxValues.map((service, idx) => (
                  <ListGroup key={idx}>
                    <ListGroup.Item>{service}</ListGroup.Item>
                  </ListGroup>
                ))
              }
            </div>
          </div>
          <div className="col-6">
            <h5>Reviewer Comments</h5>
            <p className="reviewer-comments">Reviewer comments will go here, wherver they may be, whenver they may be at, here they will be, nowhere else ever in the world of ever</p>
          </div>
        </div>
      </div>
    )
  }
};

export default ServicesRequested;
