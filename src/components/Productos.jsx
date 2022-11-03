import React from "react";
import GrillaDeProductos from "../common/GrillaDeProductos";

function Productos() {
  return (
    <div>
      <div className="container-navProductos">
        <ul className="items-navProductos">
          <li>
            <a href="#carnes">Carnes</a>
          </li>
          <li>
            <a href="#pastas">Pastas</a>
          </li>
          <li>
            <a href="#pollo">Pollo</a>
          </li>
          <li>
            <a href="#ensaladas">Ensaladas</a>
          </li>
          <li>
            <a href="#pescados">Pescados</a>
          </li>
          <li>
            <a href="#bebidas">Bebidas</a>
          </li>
          <li>
            <a href="#postres">postres</a>
          </li>
          <li>
            <a href="#veganos">Platos veganos</a>
          </li>
        </ul>
      </div>

      <div className="container-productos">
        <h2 id="carnes">Carnes</h2>
        <GrillaDeProductos />
        <h2 id="pastas">Pastas</h2>
        <GrillaDeProductos />
        <h2 id="pollo">Pollo</h2>
        <GrillaDeProductos />
        <h2 id="ensaladas">Ensaladas</h2>
        <GrillaDeProductos />
        <h2 id="pescados">Pescados</h2>
        <GrillaDeProductos />
        <h2 id="bebidas">Bebidas</h2>
        <GrillaDeProductos />
        <h2 id="postres">Postres</h2>
        <GrillaDeProductos />
        <h2 id="veganos">Platos Veganos</h2>
        <GrillaDeProductos />
      </div>
    </div>
  );
}

export default Productos;
