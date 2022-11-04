import Login from "./Login";
import Registro from "./Registro";
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Productos from "./Productos";
import Footer from "./Footer";
import { Route, Routes } from "react-router";
import ProductoDetallado from "../common/ProductoDetallado";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="registro" element={<Registro />}></Route>
        <Route path="productos" element={<Productos />}></Route>
        <Route path="/productos/:id" element={<ProductoDetallado />}></Route>
        {/* <Route
          path="/productos"
          element={<GrillaDeProductos productos={products} />}
        ></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
