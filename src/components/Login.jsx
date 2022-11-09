import axios from "axios";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userLogin } from "../state/user";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", { email, contraseña })
      .then((res) => res.data)
      .then((user) => {
        dispatch(userLogin(user));
        navigate("/");
        alert("Iniciaste sesion con exito!");
      })
      .catch(() => alert("Email o contraseña incorrecta."));
  };

  return (
    <div className="registro-container">
      <form className="registro" onSubmit={handleSubmit} autoComplete="off">
        <p>
          <AiOutlineUser />
        </p>
        <label>Email </label>
        <input
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Contraseña </label>
        <input
          type="password"
          required
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Login;
