import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DropdownMenu.module.css";
import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function MenuDropdown() {
  const [dropdown, setDropdown] = useState(false);

  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="MenuDropdown">
      <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
        <DropdownToggle caret className={styles.dropdownbutton}>
          Perfil
        </DropdownToggle>

        <DropdownMenu className={styles.dropdownmenu}>
          <DropdownItem className={styles.options}>
            <NavLink className={styles.navLinks} to={"/profile"}>
              Ir a mi perfil
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className={styles.options}>
            <NavLink className={styles.navLinks} to={""}>
              Cerrar sesión
            </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
export default MenuDropdown;
