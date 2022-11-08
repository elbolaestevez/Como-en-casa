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
import VistaHistorial from './VistaHistorial';


function App() {
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
        <Route path="/" element={<Inicio />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="registro" element={<Registro />}></Route>
        <Route path="productos" element={<Productos />}></Route>
        <Route path="/productos/:id" element={<ProductoDetallado />}></Route>
       
      </Routes>
      <VistaHistorial/>
      <Footer />
    </div>
  );
}

export default App;
