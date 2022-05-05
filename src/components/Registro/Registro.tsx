import "./Registro.css"
function Registro():JSX.Element {
  return (
	<div className="containerForm">
	<form action="" className="formStyle">

		<input id="name" name="name" type="text" placeholder="Nombre" required size={30} maxLength={60}/>

		<input id="surname" name="surname" type="text" placeholder="Apellidos" />

		<input type="email" name="email" id="email" placeholder="Correo Electrónico" required />

		<input type="text" name="address" id="address" placeholder="Dirección" required/>

		<input type="text" name="building" id="building" placeholder="Edificio" />

		<input type="password" name="password" id="password" placeholder="Contraseña"/>

		<button type="submit">Registrarse</button>
	</form>
	</div>
  )
}

export default Registro