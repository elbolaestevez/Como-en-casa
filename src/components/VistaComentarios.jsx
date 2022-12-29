import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function VistaComentarios() {
  const user = useSelector((state) => state.user);

  const [ordenes, setordenes] = useState([]);
  // const [admin, setadmin] = useState(false);
  // if (user.tipo) {
  //   console.log("holahola");
  //   setadmin(true);
  // }

  useEffect(() => {
    if (!user.tipo) {
      axios
        .get(`/api/pedido/comentado/${user.email}`)
        .then((res) => setordenes(res.data))
        .catch((error) => console.error(error));
    } else {
      axios
        .get(`/api/pedido`)
        .then((res) => setordenes(res.data))
        .catch((error) => console.error(error));
    }
  }, [user.email]);

  // useEffect(() => {
  //   axios
  //     .get(`/api/pedido`)
  //     .then((res) => setordenes(res.data))
  //     .catch((error) => console.error(error));
  // }, [admin]);

  return (
    <div className="containerTabla">
      {ordenes.map((orden) => {
        const { nombre, precio, imagen } = orden.cartas[0];
        console.log(orden);
        return (
          <div className="containercomentarios">
            <div className="divpedido">
              <p>Pedido:{orden.idpedido}</p>
            </div>
            <figure className="imagen">
              <img src={imagen} className="imagen" alt="" />
            </figure>
            <div className="divcomentarios">
              <p> {nombre}</p>

              <p>Precio:{precio}</p>
            </div>
            <div className="divfecha">
              <p>Fecha:{orden.createdAt.slice(0, 10)} </p>
              <p>Hora:{orden.createdAt.slice(11, 19)}hs</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VistaComentarios;
