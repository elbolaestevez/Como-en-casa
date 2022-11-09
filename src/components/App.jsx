import Login from "./Login";
import Registro from "./Registro";
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Productos from "./Productos";
import Footer from "./Footer";
import { Route, Routes } from "react-router";
import ProductoDetallado from "../common/ProductoDetallado";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { userLogin } from "../state/user";
import { useState } from "react";
import CarritoDeCompras from "./CarritoDeCompras";
import Pago from "./PagoTarjeta";
import PagoEfectivo from "./PagoEfectivo";

function App() {

  const [products, setProducts] = useState([]);

  //Pedido para obtener todos los productos
  
  useEffect(() => {
    axios
      .get("/api/cartas")
      .then((res) => res.data)
      .then((cartas) => setProducts(cartas))
      .catch((error) => console.error(error));
  }, []);

  //Persistencia de usuario a cierra o refresh de pagina
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((res) => res.data)
      .then((user) => dispatch(userLogin(user)))
      .catch(() => console.error("Falta loguearte"));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio products={products} />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="registro" element={<Registro />}></Route>
        <Route path="carrito" element={<CarritoDeCompras />}></Route>
        <Route path="pagoTarjeta" element={<Pago />}></Route>
        <Route path="pagoEfectivo" element={<PagoEfectivo />}></Route>
        <Route path="productos" element={<Productos products={products} />}></Route>
        <Route path="/productos/:id" element={<ProductoDetallado />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
