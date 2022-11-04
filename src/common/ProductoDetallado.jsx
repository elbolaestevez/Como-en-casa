import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function ProductoDetallado() {
  const { id } = useParams();
  console.log(id);

  const [producto, setProducto] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/cartas/${id}`)
      .then((res) => setProducto(res.data))
      .catch((error) => console.error(error));
  });
  return (
    <div className="productoDetallado">
      <div className="card-productoDetallado">
        <div className="img-productoDetallado">
          <div className="container-img">
            <img src={producto.imagen} alt="" />
          </div>
        </div>
        <div className="descripcion-productoDetallado">
          <h4>{producto.nombre}</h4>
          <p>{producto.descripcion}</p>
          <p>{`Stock: ${producto.stock} unidades`}</p>
          <h3>{`Valoracion: ${producto.puntaje} / 5`}</h3>
          <div className="btn-productoDetallado">
            <button>Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetallado;
