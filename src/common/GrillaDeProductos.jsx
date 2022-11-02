import React from "react";
import carne from "../assets/image/carne2.jpg";
import pastas from "../assets/image/pastas.jpg";

function GrillaDeProductos() {
  return (
    <div className="card-productos">
      <div className="card-producto">
        <div className="img-producto">
          <img src={carne} alt="" />
        </div>
        <div className="descripcion-producto">
          <h4>Carne al horno c/ papas</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            inventore numquam cupiditate aspernatur similique? Quaerat minus,
          </p>
          <h3>$780.00</h3>
        </div>
      </div>

      <div className="card-producto">
        <div className="img-producto">
          <img src={carne} alt="" />
        </div>
        <div className="descripcion-producto">
          <h4>Carne al horno c/ papas</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            inventore numquam cupiditate aspernatur similique? Quaerat minus,
          </p>
          <h3>$780.00</h3>
        </div>
      </div>

      <div className="card-producto">
        <div className="img-producto">
          <img src={pastas} alt="" />
        </div>
        <div className="descripcion-producto">
          <h4>Carne al horno c/ papas</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            inventore numquam cupiditate aspernatur similique? Quaerat minus,
          </p>
          <h3>$780.00</h3>
        </div>
      </div>

      <div className="card-producto">
        <div className="img-producto">
          <img src={carne} alt="" />
        </div>
        <div className="descripcion-producto">
          <h4>Carne al horno c/ papas</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            inventore numquam cupiditate aspernatur similique? Quaerat minus,
          </p>
          <h3>$780.00</h3>
        </div>
      </div>
    </div>
  );
}

export default GrillaDeProductos;
