import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Profile.module.css";
import { useForm } from "react-hook-form";
import { getUsers, updateUser, deleteUser } from "../../utils/Services";
import Cookies from "js-cookie";
import { AuthContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faUserPen } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import LoadComponent from "../../components/LoadComponent/LoadComponent";
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

  const onSubmitTest = async (data: any, e: any) => {
    data = user;
    e.preventDefault();

    swal({
      title: "¿Está segura/o?",
      text: "Se va a proceder a editar sus datos, esta acción es irreversible",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        updateUser(data).then((res) => {});
        swal("Datos actualizados correctamente. 😊", {
          icon: "success",
        });
      }
    });
  };

  // const navigate = useNavigate();
  // const deleted = async () => {
  //   deleteUser(user)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         Cookies.set("access_token", "");
  //         Cookies.set("email", "");
  //         Cookies.remove("access_token");
  //         Cookies.remove("email");
  //         setAuth(false);
  //       }
  //     })
  //     .catch((err) => {});
  //   navigate("/login");
  // };

  const navigate = useNavigate();
  const deleted = async () => {
    swal({
      title: "¿Está segura/o?",
      text: "Una vez eliminado el usuario no podrá volver a acceder 😱",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteUser(user).then((res) => {
          if (res.status === 200) {
            Cookies.set("access_token", "");
            Cookies.set("email", "");
            Cookies.remove("access_token");
            Cookies.remove("email");
            setAuth(false);
            swal("Usuario eliminado correctamente. 🥺", {
              icon: "success",
            });
            navigate("/login");
          }
        });
      } else {
        swal("Eliminación de usuario cancelada");
      }
    });
  };

  if (user <= 0) {
    return (
      <>
        <div className={styles.loading}>
          <LoadComponent></LoadComponent>
        </div>
      </>
    );
  } else {
    return (
      <Layout>
        <>
          <h2 className={styles.title}>
            &#129414; Hola, {user.email} ;D &#129414;
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
                Editar{" "}
                <FontAwesomeIcon
                  icon={faUserPen}
                  className={styles.icon}
                  size="lg"
                />
              </button>
            </div>
          </form>
          <div className={styles.buttonDelete}>
            <button onClick={deleted}>
              Borrar
              <FontAwesomeIcon
                icon={faTrashCan}
                className={styles.icon}
                size="lg"
              />
            </button>
          </div>
        </>
      </Layout>
    );
  }
}

export default Profile;
