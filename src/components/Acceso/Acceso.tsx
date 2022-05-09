import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import './Acceso.css' 
import { getRegister } from '../../utils/Services'

type TInputs = {
  email: string;
  password: string;
};

function Acceso() {
  // React States

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>({
    reValidateMode: "onChange",
  });

  /* const data = {email:"prueba@gmail.com",password:"palmira123"} */

  const onSubmitTest = async (data: TInputs) =>{
    console.log(data);
    getRegister()
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  return (
    <div className="appForm">
      <div className="login-form">
      <div className="form">
      <form onSubmit={handleSubmit(onSubmitTest)}>
        <div className="input-container">
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
        </div>
        <div className="input-container">
        <input
          type="password"
          id="password"
          placeholder="Contraseña"
          {...register("password", {
            required: true,
            minLength:8,
			      maxLength:120,
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
    </div>
      <div className="button-container">
        <input type="submit" />
      </div>
  </form>
</div>
</div>
</div>
  );
}

export default Acceso