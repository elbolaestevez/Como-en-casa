import React from "react";

import Card from "../common/Card";

function Productos({ products }) {
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
            <a href="#postres">Postres</a>
          </li>
          <li>
            <a href="#veganos">Platos Veganos</a>
          </li>
        </ul>
      </div>

      {/* <Card productos={products} /> */}

      <div className="container-productos">
        <h2 id="carnes">Carnes</h2>
        {/* <Card productos={products} /> */}
        <Card
          productos={products.filter((producto) => producto.tipo === "Carnes")}
        />

        <h2 id="pastas">Pastas</h2>
        <Card
          productos={products.filter((producto) => producto.tipo === "Pastas")}
        />

        <h2 id="pollo">Pollo</h2>
        <Card
          productos={products.filter((producto) => producto.tipo === "Pollo")}
        />

        <h2 id="ensaladas">Ensaladas</h2>
        <Card
          productos={products.filter(
            (producto) => producto.tipo === "Ensaladas"
          )}
        />

        <h2 id="pescados">Pescados</h2>
        <Card
          productos={products.filter((producto) => producto.tipo === "Pescado")}
        />

        <h2 id="bebidas">Bebidas</h2>
        <Card
          productos={products.filter((producto) => producto.tipo === "Bebidas")}
        />

        <h2 id="postres">Postres</h2>
        <Card
          productos={products.filter((producto) => producto.tipo === "Postres")}
        />

        <h2 id="veganos">Platos Veganos</h2>
        <Card
          productos={products.filter((producto) => producto.tipo === "Veganos")}
        />
      </div>
    </div>
  );
}

export default Productos;
