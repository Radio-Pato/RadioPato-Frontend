import React, { Children, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Profile.module.css";
import { useForm } from "react-hook-form";
import { getUsers } from "../../utils/Services";
import Cookies from "js-cookie";

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

  useEffect(() => {
    getUsers(email, token).then((res) => {
      setUser(res.data.data);
    });
  },[]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };
console.log(typeof user)
  if (user <= 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <Layout>
		<>
		  <p>{user.email}</p>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
            <input
              type="text"
              id="name"
              placeholder="Nombre"
			  value={user.name}
              {...register("name", {
                required: true,
                maxLength: 60,
              })}
            />
            {/* Errors */}
            {errors.name?.type === "required" && (
              <div className="errors">Debe introducir un Nombre</div>
            )}
            {errors.name?.type === "maxLength" && (
              <div className="errors">
                El nombre no puede contener mas 60 carácteres
              </div>
            )}
            <input
              type="text"
              id="surname"
              placeholder="Apellidos"
			  value={user.surname}
              {...register("surname", {
                required: true,
                maxLength: 120,
              })}
            />
            {/* Errors */}
            {errors.surname?.type === "required" && (
              <div className="errors">Debe introducir al menos un apellido</div>
            )}
            {errors.surname?.type === "maxLength" && (
              <div className="errors">
                Los apellidos no pueden contener más de 120 carácteres
              </div>
            )}



            <input
              type="text"
              id="address"
              placeholder="Dirección"
			  value={user.address}
              {...register("address", {
                required: true,
                maxLength: 200,
              })}
            />
            {/* Errors */}
            {errors.address?.type === "required" && (
              <div className="errors">Debe introducir su dirección</div>
            )}
            {errors.address?.type === "maxLength" && (
              <div className="errors">
                La dirección debe tener entre 5 y 200 carácteres
              </div>
            )}

            <input
              type="text"
              id="building"
              placeholder="Edificio"
			  value={user.building}
              {...register("building", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.building?.type === "required" && (
              <div className="errors">
                Debe introducir el edificio donde reside
              </div>
            )}
            {errors.building?.type === "maxLength" && (
              <div className="errors">
                El nombre del edificio no puede contener mas 100 carácteres
              </div>
            )}
            <button type="submit">Editar</button>
          </form>
        </div>
		</>
      </Layout>
    );
  }
}
export default Profile;
