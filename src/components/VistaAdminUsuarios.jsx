import axios from "axios";
import React, { useState, useEffect } from "react";

function VistaAdminUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => res.data)
      .then((data) => setUsuarios(data));
  }, [usuarios]);

  const handleDelete = (userId) => {
    axios.delete(`/api/users/${userId}`).catch((error) => console.error(error));
  };

  const handleAdmin = (user) => {
    const userId = user.id;
    if (!user.tipo) {
      axios
        .put(`/api/users/${userId}`, { tipo: true })
        .catch((error) => console.error(error));
    } else {
      axios
        .put(`/api/users/${userId}`, { tipo: false })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="tabla">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, i) => {
            return (
              <>
                <tr key={i}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  <td>
                    <button onClick={() => handleAdmin(usuario)}>Admin</button>
                    <button onClick={() => handleDelete(usuario.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default VistaAdminUsuarios;
