import React from "react";
import { AiOutlineUser } from "react-icons/ai";

function Registro() {
  return (
    <div className="registro-container">
      <form className="registro">
        <p><AiOutlineUser /></p>
        <label>Email </label>
        <input type="text" required />
        <label>Contraseña </label>
        <input type="password" required />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Registro;
