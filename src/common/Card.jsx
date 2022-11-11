import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

function Card({ productos }) {
  const [modal, setModal] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState(0);
  const [id, setId] = useState(0);

  const handleModal = (id) => {
    setModal(!modal);
    setId(id);
  };

  const handleTitulo = (evento) => {
    setTitulo(evento.target.value);
  };

  const handleDescripcion = (evento) => {
    setDescripcion(evento.target.value);
  };
  const handleImagen = (evento) => {
    setImagen(evento.target.value);
  };

  const handlePrecio = (evento) => {
    setPrecio(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    axios
      .put(`/api/cartas/${id}`, { nombre: titulo, descripcion, precio, imagen })
      .then(() => alert("Editaste con exito"))
      .catch(() => alert("No pudiste editarlo"));
  };

  const handleDelete = (id) => {
    setId(id);
    axios
      .delete(`/api/cartas/${id}`, {
        nombre: titulo,
        descripcion,
        precio,
        imagen,
      })
      .then(() => alert("Borraste con exito!"))
      .catch(() => alert("No pudiste Borrarlo"));
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
        {user.tipo ? (
          <div className="card-productos">
            {productos?.map((producto, i) => (
              <div key={i} className="card-producto">
                <div className="img-producto">
                  <Link to={`/productos/${producto.id}`}>
                    <img src={producto.imagen} alt="" />
                  </Link>
                </div>
                <div className="descripcion-producto">
                  <h4>{producto.nombre}</h4>
                  <p>{producto.descripcion}</p>
                  <h3>{`$ ${producto.precio}`}</h3>
                  <div>
                <button className="buttonEdit" onClick={() => handleModal(producto.id)}>
                  <AiOutlineEdit />
                </button>
                <button className="buttonRemove" onClick={() => handleDelete(producto.id)}>
                  <IoIosRemoveCircleOutline />
                </button>
                </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card-productos">
            {productos?.map((producto, i) => (
              <div key={i} className="card-producto">
                <div className="img-producto">
                  <Link to={`/productos/${producto.id}`}>
                    <img src={producto.imagen} alt="" />
                  </Link>
                </div>
                <div className="descripcion-producto">
                  <h4>{producto.nombre}</h4>
                  <p>{producto.descripcion}</p>
                  <h3>{`$ ${producto.precio}`}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content-card">
              <div className="descripcion-producto">
                <form className="card-edicion">
                  <h4>Editar producto:</h4>
                  <input
                    onChange={handleTitulo}
                    placeholder="Titulo del producto:"
                  />
                  <input onChange={handleImagen} placeholder="URL Imagen:" />
                  <input
                    onChange={handleDescripcion}
                    placeholder="Descripcion:"
                  />
                  <input placeholder="Precio:" onChange={handlePrecio} />
                  <button onClick={handleSubmit}>Editar</button>
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

export default Card;
