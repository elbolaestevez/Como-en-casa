import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TableCarritoDeCompras from "../common/TableCarritoDeCompras";

function CarritoDeCompras() {
  const user = useSelector((state) => state.user);
  const [productosCarrito, setProductosCarrito] = useState([]);

  //Pedido para mostrar los productos añadidos al carrito
  useEffect(() => {
    axios
      .get(`/api/carrito/${user.email}`)
      .then((res) => res.data)
      .then((productos) => {
        console.log("SE RENDERISA MUCHO");
        setProductosCarrito(productos)})
      .catch(() => alert("No se puede visualizar los productos del carrito"));
  }, [user.email]);

  //Funcion para mostrar el valor total a pagar
  const totalApagar = () => {
    let total = 0;
    productosCarrito.forEach((producto) => {
      total = total + producto.cartas[0].precio;
    });
    return total;
  };

  return (
    <div className="carrito_container">
      <h2>CARRITO DE COMPRAS</h2>
      {user.id ? (
        <div className="container_table">
          <table>
            <thead>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
            </thead>
            <tbody>
            {productosCarrito?.map((producto, index) => (
              <TableCarritoDeCompras key={index} producto={producto} />
            ))}
            </tbody>
          </table>
          <div className="container_total">
            <h3>TOTAL A PAGAR: ${totalApagar()} </h3>
          </div>
          <div className="container_formulario">
            <form>
              <h3>METODO DE PAGO</h3>
              <Link to="/pagoTarjeta">
                <button>PAGO TARJETA</button>
              </Link>
              <Link to="/pagoEfectivo">
                <button>EFECTIVO</button>
              </Link>
            </form>
          </div>
        </div>
      ) : (
        "INICIA SESION PARA AGREGAR PRODUCTOS AL CARRITO"
      )}
    </div>
  );
}

export default CarritoDeCompras;
