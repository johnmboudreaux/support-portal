import React from 'react';
import { withRouter } from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap';

const BreadCrumbs = (props) => {
  const capitalizeFirstLetter = ([ first, ...rest ]) => {
    return [ first.toUpperCase(), ...rest ].join('');
  }

  const pathNamePrep = (path) => {
    const newPathName = path.pathname.substr(1);
    return capitalizeFirstLetter(newPathName);
  }
  
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/project">
        {pathNamePrep(props.location)}
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
    </Breadcrumb>
  );
}

export default withRouter(BreadCrumbs);
