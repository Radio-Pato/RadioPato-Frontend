import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DropdownMenu.module.css";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

function MenuDropdown() {
  const [dropdown, setDropdown] = useState(false);

  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="MenuDropdown">
      <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
        <DropdownToggle caret className={styles.dropdownbutton}>
          Profile
        </DropdownToggle>

        <DropdownMenu className={styles.dropdownmenu}>
          <DropdownItem className={styles.options}>Ir a mi perfil</DropdownItem>
          <DropdownItem divider />
          <DropdownItem className={styles.options}>Cerrar sesión</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
export default MenuDropdown;
