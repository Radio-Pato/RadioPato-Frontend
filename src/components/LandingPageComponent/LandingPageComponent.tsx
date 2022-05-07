import React from "react";
import styles from "./LandingPageComponent.module.css";
import imagenes from "../../Assets/imagenes";
import {Link} from "react-router-dom";

function LandingPageComponent() {
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
          <Link to={"/login"} className={styles.linkAcceder}>Acceder</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPageComponent;
