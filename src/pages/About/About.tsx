import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import imagenes from "../../Assets/imagenes";

function About() {
  return (
    <Layout>
      <>
        <h2>&#129414; El equipo de RadioPato&#129414;</h2>
        <div className={styles.bigcontainer}>
          <div className={styles.firstcards}>
            <div className={styles.cards}>
              <img
                src={imagenes.FotoAlejandro.src}
                alt={imagenes.FotoAlejandro.src}
                className={styles.img}
              />
              <h4>Alejandro Velázquez Bueno</h4>
              <h5>Desarrollador FullStack</h5>
              <p>alejandrovelazquezbueno@gmail.com</p>
              <a
                target="_blank"
                href="https://linkedin.com/in/alejandro-velázquez-bueno"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.icon}
                  size="2x"
                />
              </a>
              <a
                target="_blank"
                href="https://github.com/AlejandroVelazquez1995"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.icon}
                  size="2x"
                />
              </a>
            </div>
            <div className={styles.cards}>
              <img
                src={imagenes.fotoDavid.src}
                alt={imagenes.fotoDavid.src}
                className={styles.img}
              />
              <h4>David Leandro Medina Soloza</h4>
              <h5>Desarrollador FullStack</h5>
              <p>damedsol@outlook.com</p>
              <a
                target="_blank"
                href="https://linkedin.com/in/david-medina-soloza"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.icon}
                  size="2x"
                />
              </a>
              <a target="_blank" href="https://github.com/Damedsol">
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.icon}
                  size="2x"
                />
              </a>
            </div>
          </div>
          <div className={styles.lastcards}>
            <div className={styles.cards}>
              <img
                src={imagenes.fotoNahomi.src}
                alt={imagenes.fotoNahomi.src}
                className={styles.img}
              />
              <h4>Nahomi Conde Velasco</h4>
              <h5>Desarrolladora FullStack</h5>
              <p>nahyomi2000@gmail.com</p>
              <a target="_blank" href="https://linkedin.com/in/nahomiconde">
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.icon}
                  size="2x"
                />
              </a>
              <a target="_blank" href="https://github.com/nahyoomi">
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.icon}
                  size="2x"
                />
              </a>
            </div>
            <div className={styles.cards}>
              <img
                src={imagenes.fotoMaria.src}
                alt={imagenes.fotoMaria.src}
                className={styles.img}
              />
              <h4>María Ochando Calvo</h4>
              <h5>Trabajadora Social y Desarrolladora FullStack</h5>
              <p>mariaochandocalvo@gmail.com</p>
              <a
                target="_blank"
                href="https://linkedin.com/in/maría-ochando-calvo-178180203"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.icon}
                  size="2x"
                />
              </a>
              <a target="_blank" href="https://github.com/MariaOchando">
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.icon}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default About;
