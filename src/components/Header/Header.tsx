import { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";
import imagenes from "../../Assets/imagenes";
import MenuDropdown from "../MenuDropDown/MenuDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faDove,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [stylish, setStylish] = useState(false);
  return (
    <header>
      <div className={styles.icon__container}>
        <img src={imagenes.Logo68.src} alt={imagenes.Logo68.alt} />
        <h1>Radio Pato</h1>
      </div>
      <div
        className={
          stylish
            ? `${styles.nav} ${styles.navActive}`
            : `${styles.nav} ${styles.navInactive}`
        }
      >
        <NavLink className={styles.navLinks} to={"/home"}>
          <FontAwesomeIcon
            icon={faHouseChimney}
            className={styles.icon}
            size="lg"
          />
          Home
        </NavLink>
        <NavLink className={styles.navLinks} to={""}>
          <FontAwesomeIcon
            icon={faUserCircle}
            className={styles.icon}
            size="lg"
          />
          <MenuDropdown />
        </NavLink>
        <NavLink className={styles.navLinks} to={"/about"}>
          <FontAwesomeIcon icon={faDove} className={styles.icon} size="lg" />
          About us
        </NavLink>
      </div>
      <div
        className={styles.burgerBtn}
        onClick={() => {
          setStylish(!stylish);
        }}
      >
        <Menu />
      </div>
    </header>
  );
}

export default Header;
