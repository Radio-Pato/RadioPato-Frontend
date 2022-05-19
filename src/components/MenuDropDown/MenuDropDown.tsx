import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MenuDropDown.module.css";
import { useState, useContext, useEffect } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/DataContext";
import Cookies from 'js-cookie'

function MenuDropdown() {
  const [dropdown, setDropdown] = useState(false);
  const { auth, setAuth }: any = useContext(AuthContext);
  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };
  const navigate = useNavigate();

  const logout = async () => {

	await axios.get("http://localhost:3001/usuarios/cierredesesion").then((res) => {
		if(res.data.status === 200)
		setAuth(false);
		Cookies.remove("access_token")
		Cookies.remove("email")
	  });
	navigate("/login");

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
            <span className={styles.navLinks} onClick={logout}>
              Cerrar sesión
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
export default MenuDropdown;
