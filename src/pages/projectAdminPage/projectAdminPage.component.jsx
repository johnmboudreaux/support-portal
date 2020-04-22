import React from 'react';
import BreadCrumbs from '../../components/breadcrumb/breadcrumb.component';
import FormInput from '../../components/form-input/form-input.component';

import './projectAdminPage.styles.scss';


const ProjectAdminPage = () => {
  return (
    <div className="project-admin-page-wrapper container">
      <BreadCrumbs />  
      <div className="row">
        <div className="col">Name*</div>
        <div className="col">Number*</div>
        <div className="col">Owning Company*</div>
        <div className="col">Start Date*</div>
        <div className="col">End Date</div>
      </div>
      <div className="row">
        <div className="col"><FormInput /></div>
        <div className="col"><FormInput /></div>
        <div className="col"><FormInput /></div>
        <div className="col"><FormInput /></div>
        <div className="col"><FormInput /></div>
      </div>
    </div>
  );
}

export default ProjectAdminPage;