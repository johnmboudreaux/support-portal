import React from 'react';
import CheckInStatus from '../checkInStatus/checkInStatus.component';
import Clinic from '../clinic/clinic.component';
import Provider from '../provider/provider.component';
import PurchaseOrder from '../purchaseOrder/purchaseOrder.component';
import ReasonForVisit from '../reasonForVisit/reasonForVisit.component';
import VisitDate from '../visitDate/visitDate.component';

import './visitInfo.styles.scss';

const VisitInfo = () => {
  return (
    <div className='visit-info col-4'>
      <h5>Visit Info</h5>
      <ReasonForVisit />
      <VisitDate />
      <PurchaseOrder />
      <Clinic />
      <Provider />
      <CheckInStatus />
    </div>
  );
};

export default VisitInfo;
