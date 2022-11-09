import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

function TableCarritoDeCompras({ producto }) {
  const [contador, setContador] = useState(0)
  const { imagen, nombre, descripcion, precio } = producto.cartas[0];

  //Pedio para eliminar un producto
  const handleDeleteProducto = () => {
    axios
      .delete(`/api/carrito/delete/${producto.id}`)
      .then(() => alert("Eliminado con exito del carrito"));
  };

  const handleSuma = () => {
    let contadorActualizado = contador + 1
    setContador(contadorActualizado)
  }

  const handleResta = () =>{
    let contadorActualizado = contador - 1
    setContador(contadorActualizado)
  }

  return (
    <tr className="row_table">
      <td><img src={imagen} alt="producto" /></td>
      <td>{nombre}</td>
      <td>{descripcion}</td>
      <td>{precio}</td>
      <td><button onClick={handleResta}>-</button> {contador} <button onClick={handleSuma}>+</button></td>
      <td><button onClick={handleDeleteProducto}><AiFillDelete /></button>
      </td>
    </tr>
  );
}

export default TableCarritoDeCompras;
