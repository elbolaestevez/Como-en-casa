import React from "react";
import { VscDiffAdded } from "react-icons/vsc";
import Card from "../common/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

function Productos({ products }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [tipo, setTipo] = useState("");
  const [modal, setModal] = useState(false);
  const [imagen, setImagen] = useState("");

  const handleImagen = (evento) => {
    setImagen(evento.target.value);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleTipo = (tipo) => {
    setTipo(tipo);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    axios
      .post(`/api/cartas`, {
        nombre: titulo,
        descripcion,
        precio,
        tipo: tipo,
        imagen,
      })
      .then(() => alert("Agregado con exito!"))
      .catch(() => alert("No pudiste crearlo"));
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const user = useSelector((state) => state.user);
  return (
    <>
      <div>
        <div className="container-navProductos">
          <ul className="items-navProductos">
            <li>
              <a href="#carnes">Carnes</a>
            </li>
            <li>
              <a href="#pastas">Pastas</a>
            </li>
            <li>
              <a href="#pollo">Pollo</a>
            </li>
            <li>
              <a href="#ensaladas">Ensaladas</a>
            </li>
            <li>
              <a href="#pescados">Pescados</a>
            </li>
            <li>
              <a href="#bebidas">Bebidas</a>
            </li>
            <li>
              <a href="#postres">Postres</a>
            </li>
            <li>
              <a href="#veganos">Platos Veganos</a>
            </li>
          </ul>
        </div>

        {user.tipo ? (
          <div className="container-productos">
            <div className="cadaProducto">
              <h2 id="carnes">Carnes</h2>
              <button className="buttonAdd" onClick={handleModal}>
                <VscDiffAdded />
              </button>
            </div>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Carnes"
              )}
            />
            <div className="cadaProducto">
              <h2 id="pastas">Pastas</h2>
            </div>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Pastas"
              )}
            />
            <div className="cadaProducto">
              <h2 id="pollo">Pollo</h2>
            </div>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Pollo"
              )}
            />
            <div className="cadaProducto">
              <h2 id="ensaladas">Ensaladas</h2>
            </div>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Ensaladas"
              )}
            />
            <div className="cadaProducto">
              <h2 id="pescados">Pescados</h2>
            </div>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Pescado"
              )}
            />
            <div className="cadaProducto">
              <h2 id="bebidas">Bebidas</h2>
            </div>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Bebidas"
              )}
            />
            <div className="cadaProducto">
              <h2 id="postres">Postres</h2>
            </div>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Postres"
              )}
            />
            <div className="cadaProducto">
              <h2 id="veganos">Platos Veganos</h2>
            </div>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Veganos"
              )}
            />
          </div>
        ) : (
          <div className="container-productos">
            <h2 id="carnes">Carnes</h2>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Carnes"
              )}
            />

            <h2 id="pastas">Pastas</h2>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Pastas"
              )}
            />

            <h2 id="pollo">Pollo</h2>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Pollo"
              )}
            />

            <h2 id="ensaladas">Ensaladas</h2>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Ensaladas"
              )}
            />

            <h2 id="pescados">Pescados</h2>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Pescado"
              )}
            />

            <h2 id="bebidas">Bebidas</h2>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Bebidas"
              )}
            />

            <h2 id="postres">Postres</h2>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Postres"
              )}
            />

            <h2 id="veganos">Platos Veganos</h2>
            <Card
              productos={products.filter(
                (producto) => producto.tipo === "Veganos"
              )}
            />
          </div>
        )}
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="descripcion-producto">
                <form className="agregarProducto">
                  <div>
                    <h4>Agregar un nuevo producto:</h4>
                    <input
                      placeholder="Titulo del producto:"
                      onChange={(e) => setTitulo(e.target.value)}
                    />
                    <input onChange={handleImagen} placeholder="URL Imagen:" />
                    <input
                      placeholder="Descripcion:"
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <input
                      placeholder="Precio:"
                      onChange={(e) => setPrecio(e.target.value)}
                    />
                  </div>
                  <select onChange={(e) => handleTipo(e.target.value)}>
                    <option value="Elegi una opcion">Elegi una opcion</option>
                    <option value="Carnes">Carnes</option>
                    <option value="Pastas">Pastas</option>
                    <option value="Pescados">Pescados</option>
                    <option value="Pollo">Pollo</option>
                    <option value="Ensaladas">Ensaladas</option>
                    <option value="Bebidas">Bebitas</option>
                    <option value="Postres">Posatres</option>
                    <option value="Veganos">Veganos</option>
                  </select>
                  <button onClick={handleSubmit}>Agregar</button>
                </form>
              </div>
              <button className="close-modal" onClick={handleModal}>
                CERRAR
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Productos;
