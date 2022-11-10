import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";

function TableCarritoDeCompras({ producto, handleDeleteProducto }) {
  const { imagen, nombre, descripcion, precio } = producto.cartas[0];
  const [contador, setContador] = useState(1);
  const user = useSelector((state) => state.user);

  //   Funcion para sumar un numero y producto en cantidad
  const handleSuma = () => {
    let contadorActualizado = contador + 1;
    setContador(contadorActualizado);
    axios
      .post("/api/carrito", {
        email: user.email,
        idcarta: producto.cartas[0].id,
        detalle: null,
      })
      .then(() => alert("Se a agregado"))
      .catch(() => alert("No se a agregado"));
  };

  //   Funcion para restar un numero y producto en cantidad
  const handleResta = () => {
    let contadorActualizado = contador - 1;
    setContador(contadorActualizado);
    axios
      .delete(`/api/carrito/delete/${producto.id}`)
      .then(() => alert("Eliminado con exito!"))
      .catch(() => alert("No se a eliminado!"));
  };

  return (
    <tr className="row_table">
      <td>
        <img src={imagen} alt="producto" />
      </td>
      <td>{nombre}</td>
      <td>{descripcion}</td>
      <td>{precio}</td>
      <td>
        <button onClick={handleResta}>-</button>
        {contador}
        <button onClick={handleSuma}>+</button>
      </td>
      <td>
        <button onClick={() => handleDeleteProducto(producto.id)}>
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
}

export default TableCarritoDeCompras;
