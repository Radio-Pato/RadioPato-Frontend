import React from "react";
import styles from "./LandingPageComponent.module.css";
import imagenes from "../../Assets/imagenes";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faLaptop,
  faDigitalTachograph,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

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
              Tu Aplicación Web para gestionar tu comunidad de vecinos.
            </h3>
            <h4 className={styles.slogan}>
              &#129414; Mientras los gansos hacen honk, los patos hacen cuack.
              &#129414;
            </h4>
          </div>
          <Link to={"/login"} className={styles.linkAcceder}>
            Acceder
          </Link>
        </div>
        <div className={styles.servicescontainer}>
          <h2 className={styles.serviciostitle}>Lo que ofrecemos</h2>
          <div className={styles.cards}>
            <FontAwesomeIcon
              icon={faMobileAlt}
              className={styles.icon}
              size="2x"
            />
            <FontAwesomeIcon
              icon={faLaptop}
              className={styles.icon}
              size="2x"
            />
            <h3>Varios dispositivos</h3>
            <p>
              Puedes acceder cómodamente desde tu móvil, tablet o pc para estar
              siempre informado.
            </p>
          </div>
          <div className={styles.cards}>
            <FontAwesomeIcon
              icon={faDigitalTachograph}
              className={styles.icon}
              size="2x"
            />
            <h3>Digitalizado</h3>
            <p>
              Deja atrás el papel y aporta tu marca verde digitalizando todo el
              contenido de tu comunidad de vecinos.
            </p>
          </div>
          <div className={styles.cards}>
            <FontAwesomeIcon
              icon={faHandsHelping}
              className={styles.icon}
              size="2x"
            />
            <h3>Sencillez</h3>
            <p>
              Accede a todo el contenido desde cualquier lugar y en cualquier
              momento, de forma sencilla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageComponent;
