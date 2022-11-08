import Login from './Login';
import Registro from './Registro';
import Navbar from './Navbar';
import Inicio from './Inicio';
import Productos from './Productos';
import Footer from './Footer';
import { Route, Routes } from 'react-router';
import ProductoDetallado from '../common/ProductoDetallado';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { userLogin } from '../state/user';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  //Pedido para obtener todos los productos

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/cartas')
      .then((res) => res.data)
      .then((cartas) => setProducts(cartas))
      .catch((error) => console.error(error));
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('/api/users/me')
      .then((res) => res.data)
      .then((user) => dispatch(userLogin(user)))
      .catch(() => console.error('Falta loguearte'));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio products={products} />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="registro" element={<Registro />}></Route>
        <Route
          path="productos"
          element={<Productos products={products} />}
        ></Route>
        <Route path="/productos/:id" element={<ProductoDetallado />}></Route>
      </Routes>
      <VistaHistorial />
      <Footer />
    </div>
  );
}

export default App;
