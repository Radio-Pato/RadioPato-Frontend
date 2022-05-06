import React from "react";
import LoadComponent from "../LoadComponent/LoadComponent";
import imagenes from "../../assets/imagenes";
import "./LoadingPageComponent.css";

function LoadingPageComponent() {
  return (
    <div className="bigcontainer">
      <div className="container">
        <img
          src={imagenes.Logo480.src}
          alt={imagenes.Logo480.alt}
          className="logo"
        />
        <div className="smallcontainer">
          <h1 className="title">Radio Pato</h1>
          <h3 className="slogan">
            Tu aplicación Web para gestionar tu comunidad de vecinos
          </h3>
        </div>
        <LoadComponent />
      </div>
    </div>
  );
}

export default LoadingPageComponent;
