// import React from 'react';
// import { Form, Col } from 'react-bootstrap';
// import SingleDatePickerWrapper from '../singleDatePicker/singleDatePicker.component';
// import Button from '../../components/customButton/customButton.component';
// import FormInput from '../form-input/form-input.component';
// import { FaEdit } from 'react-icons/fa';

// import './authSearchedDetails.styles.scss';

// const AuthSearchedDetails = ({ findTarget }) => {
//   const targetNode = findTarget();

//   return (
//     <div className="auth-details-wrapper" key={`${targetNode.authorizationPatientId}`}>
//       <header><h5>Authorization {`${targetNode.authorizationPatientId} `} Details</h5></header>
//       <div className="auth-details-content">
//         <div className="patient-info">
//           <h5>Patient Info <Button type="submit"><FaEdit /></Button></h5>
//           <div><strong>Name:</strong>{` ${targetNode.firstName} ${targetNode.lastName}`}</div>
//           <div><strong>SSN:</strong>{` ${targetNode.ssn}`}</div>
//           <div><strong>Date Of Birth:</strong> {`${targetNode.dob}`}</div>
//           <div><strong>Phone:</strong> {` ${targetNode.phone}`}</div>
//         </div>
//         <div className="employer-info">
//           <h5>Employer Info</h5>
//           <div className="company">
//             <strong>Company:</strong>
//             <FormInput placeholder={`${targetNode.company}`}/>
//           </div>
//           <div className="job-number">
//             <strong>Job#:</strong>
//             <FormInput placeholder={`${targetNode.jobNumber}`}/>
//           </div>
//           <div><strong>Authorizing Rep:</strong>{` ${targetNode.authRep}`}</div>
//           <div><strong>Rep Phone:</strong>{` ${targetNode.authRepPhone}`}</div>
//           <div className="billing-group">
//             <strong>BillingGroup:</strong>
//             <FormInput placeholder={`${targetNode.billingGroup}`}/>
//           </div>
//         </div>
//         <div className="visit-info">
//           <h5>Visit Info</h5>
//           <div className="reason">
//             <Form.Group as={Col} controlId="formGridState">
//               <Form.Label><strong>Reason for Visit:</strong></Form.Label>
//               <Form.Control as="select" defaultValue={`${targetNode.reason}`}>
//                 <option>Choose...</option>
//                 <option>...</option>
//               </Form.Control>
//             </Form.Group>
//           </div>
//           <div className="visit-date">
//             <strong>Date of Visit:</strong>
//             <SingleDatePickerWrapper placeholderText={targetNode.visitDate}/>
//           </div>
//           <div className="purchase-order">
//             <strong>Purchase Order:</strong>
//             <FormInput placeholder={`${targetNode.poNum}`}/>
//           </div>
//           <div className="clinic">
//             <strong>Clinic:</strong>
//             <FormInput placeholder={`${targetNode.clinic}`}/>
//           </div>
//           <div className="provider">
//             <strong>Provider:</strong>
//             <FormInput placeholder={`${targetNode.provider}`}/>
//           </div>
//           <div>
//             <strong>Check in Status:</strong>
//             {` ${targetNode.status}`}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AuthSearchedDetails