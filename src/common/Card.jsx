import React from "react";
import { Link } from "react-router-dom";

function Card({ productos }) {
  return (
    <div className="card-productos">
      {productos?.map((producto, i) => (
        <div key={i} className="card-producto">
          <div className="img-producto">
            <Link to={`/productos/${producto.id}`}>
              <img src={producto.imagen} alt="" />
            </Link>
          </div>
          <div className="descripcion-producto">
            <h4>{producto.nombre}</h4>
            <p>{producto.descripcion}</p>
            <h3>{`$ ${producto.precio}`}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
