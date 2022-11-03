import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/image/Logo-sin-fondo.png"

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar">
        <div className="navbar_menu">
          <img src={logo} alt="logo" srcset="" />
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="productos">Productos</Link></li>
            <li><a>Nosotros</a></li>
            <li><a>Contacto</a></li>
            <li><a><FaUserCircle /></a>
              <ul>
              <li><Link to="login">Login</Link></li>
              <li><Link to="registro">Registrarse</Link></li>
            </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;