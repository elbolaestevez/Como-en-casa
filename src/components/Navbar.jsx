import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar">
        <div className="navbar_menu">
          <h2>El Buen Comer</h2>
          <ul>
            <li><a>Home</a></li>
            <li><a>Productos</a></li>
            <li><a>Nosotros</a></li>
            <li><a>Contacto</a></li>
            <li className="navbar_logo"><a><FaUserCircle /></a>
              <ul>
              <li><a>Login</a></li>
              <li><a>Registrarse</a></li>
            </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;