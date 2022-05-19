import "./Registro.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/DataContext";
import { useForm } from "react-hook-form";
import { postRegister } from "../../utils/Services";
import swal from 'sweetalert'

type TInputs = {
  name: string;
  surname: string;
  email: string;
  address: string;
  building: string;
  password: string;
};
interface Props {
  setChanger: any;
}
function Registro({ setChanger }: Props): JSX.Element {
  /*   const  {auth, setAuth}:any = useContext(AuthContext) */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>({
    reValidateMode: "onChange",
  });
  const onSubmitTest = async (data: TInputs) => {
    postRegister(data)
      .then((res) => {
        if (res.data.status === 200) {
          /* setAuth(true) */
          setChanger(true);
          swal(
            `Usuario ${res.data.data.name} fue registrado con Exito! iniciar Seccion primero`
          )
        }
      })
      .catch((err) => {
        if(err.response.data.status === 400) {
          swal (
            err.response.data.error
          )
        };
        console.error(err.response.data);
      });
  };
  return (
    <div className="containerForm">
      <form onSubmit={handleSubmit(onSubmitTest)} className="formStyle">
        <input
          type="text"
          id="name"
          placeholder="Nombre"
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
          type="email"
          id="email"
          placeholder="Correo Electrónico"
          {...register("email", {
            required: true,
            maxLength: 60,
          })}
        />
        {/* Errors */}
        {errors.email?.type === "required" && (
          <div className="errors">Debe introducir un correo electrónico</div>
        )}
        {errors.email?.type === "maxLength" && (
          <div className="errors">
            Los apellidos no pueden contener mas de 60 carácteres
          </div>
        )}

        <input
          type="text"
          id="address"
          placeholder="Dirección"
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
          {...register("building", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.building?.type === "required" && (
          <div className="errors">Debe introducir el edificio donde reside</div>
        )}
        {errors.building?.type === "maxLength" && (
          <div className="errors">
            El nombre del edificio no puede contener mas 100 carácteres
          </div>
        )}

        <input
          type="password"
          id="password"
          placeholder="Contraseña"
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 120,
          })}
        />
        {errors.password?.type === "required" && (
          <div className="errors">Debe introducir una contraseña</div>
        )}

        {errors.password?.type === "minLength" && (
          <div className="errors">
            La contraseña debe tener entre 8 y 120 carácteres
          </div>
        )}
        {errors.password?.type === "maxLength" && (
          <div className="errors">
            La contraseña debe tener entre 8 y 120 carácteres
          </div>
        )}
        {errors.password?.type === "pattern" && (
          <div className="errors">
            La contraseña solo puede tener carácteres alfanuméricos
          </div>
        )}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
