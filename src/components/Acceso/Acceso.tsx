import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Acceso.css";
import { AuthContext } from "../../contexts/DataContext";
import { getRegister } from "../../utils/Services";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import swal from "sweetalert";

type TInputs = {
  email: string;
  password: string;
};

function Acceso() {
  const { auth, setAuth }: any = useContext(AuthContext);
  let navigate = useNavigate();
  // React States

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>({
    reValidateMode: "onChange",
  });

  const onSubmitTest = async (data: any) => {
    getRegister(data)
      .then((res) => {
        if (res.data.status === 200) {
          Cookies.set("access_token", res.data.token);
          Cookies.set("email", res.data.email);
          setAuth(true);
          swal('🦆 Bienvenida/o de nuevo 😄 🦆');
        }
        navigate("/home");
      })
      .catch((err) => {
        if (err.response.data.status === 400) {
          swal(`Se ha producido un error al intentar iniciar sesión, inténtelo de nuevo`);
        }
      });
  };

  useEffect(() => {}, [auth]);

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
                <div className="errors">
                  Debe introducir un correo electrónico
                </div>
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

export default Acceso;
