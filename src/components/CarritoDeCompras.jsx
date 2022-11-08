import React from "react";
import TableCarritoDeCompras from "../common/TableCarritoDeCompras";

function CarritoDeCompras() {
  return (
    <div className="carrito_container">
      <TableCarritoDeCompras />
      <div className="container_formulario">
        <form>
          <h3>METODO DE PAGO</h3>
          <label>
            <input type="radio" name="pago" checked /> Tarjeta de credito
          </label>
          <label>
            <input type="radio" name="pago" /> Efectivo
          </label>
          <button>ENVIAR</button>
        </form>
      </div>
    </div>
  );
}

export default CarritoDeCompras;
