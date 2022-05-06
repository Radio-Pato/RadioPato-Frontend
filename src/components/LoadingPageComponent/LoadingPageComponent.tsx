import React from "react";
import styles from "./LoadingPageComponent.module.css";
import LoadComponent from "../LoadComponent/LoadComponent";
import imagenes from "../../assets/imagenes";

function LoadingPageComponent() {
  return (
    <div className={styles.bigcontainer}>
      <div className={styles.container}>
        <img
          src={imagenes.Logo480.src}
          alt={imagenes.Logo480.alt}
          className={styles.logo}
        />
        <div className={styles.midcontainer}>
          <div className={styles.smallcontainer}>
            <h1 className={styles.title}>Radio Pato</h1>
            <h3 className={styles.slogan}>
              Tu aplicación Web para gestionar tu comunidad de vecinos
            </h3>
          </div>

          <LoadComponent />
        </div>
      </div>
    </div>
  );
}

export default LoadingPageComponent;
