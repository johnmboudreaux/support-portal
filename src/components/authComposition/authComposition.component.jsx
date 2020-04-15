import React from 'react';
import Button from '../customButton/customButton.component';

import './authComposition.styles.scss';

const AuthComposition = () => (
  <div className="auth-comp-wrapper">
    <header><h5>Compositions</h5></header>
    <div className="auth-composition-content">
      <Button>Add Composition</Button>
    </div>
  </div>
);

export default AuthComposition;
