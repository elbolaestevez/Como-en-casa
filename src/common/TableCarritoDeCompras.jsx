import React from "react";
import { AiFillDelete } from "react-icons/ai";

function TableCarritoDeCompras() {
  return (
    <div className="container_table">
      <h2>CARRITO DE COMPRAS</h2>
      <table>
        <tr>
          <th>Imagen</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Eliminar</th>
        </tr>
        <tr>
          <td>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg"
              alt="producto"
            />
          </td>
          <td>
            Hamburguesa simple de un medallon de carne de 90gms, con lechuga y
            tomate
          </td>
          <td>$ 1200</td>
          <td>1/10</td>
          <td>
            <AiFillDelete />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default TableCarritoDeCompras;
