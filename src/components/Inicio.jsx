import React from "react";
import Card from "../common/Card";

function Inicio({ products }) {
  return (
    <div className="inicio_container">
      {/* Comienzo carrusel */}
      <div className="contentItemCarrusel">
        <div className="itemCarrusel" id="itemCarrusel-1">
          <div className="imagenCarrusel" id="imagenCarrusel-1">
            <img
              src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="item1"
            ></img>
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-3">
              <i>I</i>
            </a>
            <a href="#itemCarrusel-2">
              <i>D</i>
            </a>
          </div>
        </div>
        <div className="itemCarrusel" id="itemCarrusel-2">
          <div className="imagenCarrusel" id="imagenCarrusel-2">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              alt="item2"
            ></img>
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-1">
              <i>I</i>
            </a>
            <a href="#itemCarrusel-3">
              <i>D</i>
            </a>
          </div>
        </div>
        <div className="itemCarrusel" id="itemCarrusel-3">
          <div className="imagenCarrusel" id="imagenCarrusel-3">
            <img
              src="https://images.unsplash.com/photo-1604909053796-048c8c9801a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="item3"
            ></img>
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-2">
              <i>I</i>
            </a>
            <a href="#itemCarrusel-1">
              <i>D</i>
            </a>
          </div>
        </div>
      </div>
      {/* Comienzo cards */}
      <h2>Productos mas Populares</h2>
      {
        <Card
          productos={products.filter((producto) => producto.puntaje >= 3)}
        />
      }
    </div>
  );
}

export default Inicio;
