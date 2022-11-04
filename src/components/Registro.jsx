import axios from "axios";
import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router";

function Registro() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/register", {
        nombre,
        email,
        contraseña,
        telefono,
        direccion,
      })
      .then((res) => res.data)
      .then(() => {
        navigate("/login");
        alert("Felicitaciones registro exitoso!");
      })
      .catch(() => alert("Registro incorrecto, intenta nuevamente"));
  };

  return (
    <div className="loggin-container">
      <form className="loggin" onSubmit={handleSubmit} autoComplete="off">
        <p>
          <AiOutlineUserAdd />
        </p>
        <label>Nombre </label>
        <input
          type="text"
          required
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Email </label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Contraseña </label>
        <input
          type="password"
          required
          onChange={(e) => setContraseña(e.target.value)}
        />
        <label>Repetir Contraseña </label>
        <input type="password" required />
        <label>Telefono</label>
        <input
          type="text"
          required
          onChange={(e) => setTelefono(e.target.value)}
        />
        <label>Direccion </label>
        <input
          type="text"
          required
          onChange={(e) => setDireccion(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Registro;
