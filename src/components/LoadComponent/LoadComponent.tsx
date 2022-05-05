import React from 'react';
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoadComponent.css';
// npm install bootstrap reactstrap

function LoadComponent() {
  return (
	<div className='divFather'>
    <div className='divChild'>
      <Spinner color='success' className='spinnerReactstrap'/>
    </div>
  </div>
  )
}

export default LoadComponent