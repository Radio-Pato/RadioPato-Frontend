import React, { Children, useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Profile.module.css";
import { useForm } from "react-hook-form";
import { getUsers, updateUser, deleteUser } from "../../utils/Services";
import Cookies from "js-cookie";
import { AuthContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faTrashCan,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

type TInputs = {
  name: string;
  surname: string;
  email: string;
  address: string;
  building: string;
  password: string;
};

function Profile() {
  const email: String | undefined = Cookies.get("email");
  const token: String | undefined = Cookies.get("access_token");

  const [user, setUser] = useState<any>([]);
  const { auth, setAuth }: any = useContext(AuthContext);

  useEffect(() => {
    getUsers(email, token).then((res) => {
      setUser(res.data.data);
      console.log(user);
    });
  }, []);

  //

  const onChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { handleSubmit, register } = useForm<TInputs>({
    reValidateMode: "onChange",
  });

  /* const changeSubmit = (e:any) => {
  e.preventDefault();
  console.log(user)
  updateUser(user).then((res) => {
    console.log(res);
  });
} */
  const onSubmitTest = async (data: any, e: any) => {
    data = user;
    e.preventDefault();
    updateUser(data).then((res) => {
      console.log(res);
    });
  };

  const navigate = useNavigate();
  const deleted = async () => {
    deleteUser(user)
      .then((res) => {
        if (res.status === 200) {
          Cookies.set("access_token", "");
          Cookies.set("email", "");
          Cookies.remove("access_token");
          Cookies.remove("email");
          setAuth(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    navigate("/login");
  };

  if (user <= 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <Layout>
        <>
          <h2 className={styles.title}>
            &#129414; Bienvenida/o {user.email} ;D &#129414;
          </h2>
          <form
            className={styles.profile}
            onSubmit={handleSubmit(onSubmitTest)}
          >
            <input
              type="text"
              placeholder="name"
              {...register("name")}
              value={user.name}
              onChange={onChange}
            />

            <input
              type="text"
              {...register("surname")}
              value={user.surname}
              placeholder="surname"
              onChange={onChange}
            />
            <input
              type="text"
              {...register("address")}
              placeholder="Dirección"
              value={user.address}
              onChange={onChange}
            />
            <input
              type="text"
              id="building"
              placeholder="Edificio"
              value={user.building}
              {...register("building")}
              onChange={onChange}
            />

            <div className={styles.buttonsForm}>
              <button type="submit">
                {" "}
                <FontAwesomeIcon
                  icon={faUserPen}
                  className={styles.icon}
                  size="lg"
                />
                Editar
              </button>
              <button onClick={deleted}>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className={styles.icon}
                  size="lg"
                />
                Borrar
              </button>
            </div>
          </form>
        </>
      </Layout>
    );
  }
}

export default Profile;
