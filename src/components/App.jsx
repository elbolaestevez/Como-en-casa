import Login from "./Login";
import Registro from "./Registro";
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Productos from "./Productos";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="registro" element={<Registro />}></Route>
        <Route path="productos" element={<Productos />}></Route>
      </Routes>
    </div>
  );
}

export default App;
