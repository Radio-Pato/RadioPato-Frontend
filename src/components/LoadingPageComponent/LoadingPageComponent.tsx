import React from 'react'
import LoadComponent from '../LoadComponent/LoadComponent'
import imagenes from '../../assets/imagenes';

function LoadingPageComponent() {
  return (
	<div>
        <img src={imagenes.Logo960.src} alt={imagenes.Logo960.alt} className=""/>

        <h1>Radio Pato</h1>
        <LoadComponent></LoadComponent>
    </div>
  )
}

export default LoadingPageComponent