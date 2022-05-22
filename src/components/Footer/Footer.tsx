import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialMedia}>
        <li className={styles.icons}>
          <a
            className={styles.brandedIcon}
            href="https://github.com/Radio-Pato"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
