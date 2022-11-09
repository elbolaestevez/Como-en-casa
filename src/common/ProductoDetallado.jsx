import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

function ProductoDetallado() {
  const navigate = useNavigate()
  const { id } = useParams();
  const user = useSelector((state) => state.user);

  const [producto, setProducto] = useState({});

  useEffect(() => {
    axios
      .get(`/api/cartas/${id}`)
      .then((res) => setProducto(res.data))
      .catch((error) => console.error(error));
  }, [id]);

  //Evento click para agregar pedido al carrito
  const handleAdd = () => {
    axios.post("/api/carrito",{email: user.email, idcarta: id, detalle: null})
    .then((res)=> res.data)
    .then(()=> alert("Añadido al carrito con exito"))
    .catch(()=> {
      alert("Inicia sesion para agregar al carrito")
      navigate("/login")
    })
  };

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
            <button onClick={handleAdd}>Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetallado;
