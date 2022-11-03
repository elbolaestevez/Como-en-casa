import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

function Login() {
  return (
    <div className="loggin-container">
      <form className="loggin">
        <p><AiOutlineUserAdd /></p>
        <label>Nombre </label>
        <input type="text" required />
        <label>Email </label>
        <input type="email" required />
        <label>Contraseña </label>
        <input type="password" required />
        <label>Repetir Contraseña </label>
        <input type="password" required />
        <label>Telefono</label>
        <input type="text" required />
        <label>Direccion </label>
        <input type="text" required />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Login;
