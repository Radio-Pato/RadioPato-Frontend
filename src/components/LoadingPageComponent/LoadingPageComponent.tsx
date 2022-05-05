import React from 'react'
import LoadComponent from '../LoadComponent/LoadComponent'
import imagenes from '../../assets/imagenes';

function LoadingPageComponent() {
  return (
	<div>
        <img src={imagenes[0].src} alt={imagenes[0].alt} className=""/>
        
        <h1>Radio Pato</h1>
        <LoadComponent></LoadComponent>
    </div>
  )
}

export default LoadingPageComponent