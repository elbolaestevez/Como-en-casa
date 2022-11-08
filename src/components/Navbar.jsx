import axios from "axios";
import React from "react";
import { FaUserCircle, FaUserCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/image/Logo-sin-fondo.png";
import { userLogOut } from "../state/user";

function Navbar() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);

  const handlerLogOut = () => {
    axios.post("/api/users/logout")
    .then(res=> res.data)
    .then(()=> dispatch(userLogOut()))
    .catch(()=>alert("No se pudo cerrar sesion."))
  };

  return (
    <div className="navbar_container">
      <div className="navbar">
        <div className="navbar_menu">
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="productos">Productos</Link>
            </li>
            <li>
              <a>Nosotros</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
            {user.id ? (
              <li><a> <FaUserCheck /> </a>
                <ul>
                  <li> <a>Historial</a></li>
                  <li><Link  onClick={handlerLogOut}>Log Out</Link></li>
                </ul>
              </li>
            ) : (
              <li><a><FaUserCircle /></a>
                <ul>
                  <li><Link to="login">Login</Link></li>
                  <li><Link to="registro">Registrarse</Link></li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
