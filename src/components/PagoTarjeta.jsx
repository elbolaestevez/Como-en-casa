import React from "react";
import {GoCreditCard} from "react-icons/go"

function Pago() {
  return (
    <div class="container">
      <div class="card">
        <button class="proceed">
          <svg class="sendicon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
          </svg>
        </button>
        
          <GoCreditCard class="logo-card" />
          
        
        <label>Numero de tarjeta:</label>
        <input
          id="user"
          type="text"
          class="input cardnumber"
          placeholder="**** **** **** ****"
        />
        <label>Nombre y Apellido:</label>
        <input class="input name" placeholder="Nombre y Apellido" />
        <label class="toleft">CCV:</label>
        <input class="input toleft ccv" placeholder="00/00" />
      </div>
      <div class="receipt">
        <div class="col">
          <p>Total:</p>
          <h2 class="cost">$ 1580</h2>
          <br />
          <p>Email:</p>
          <h5 class="seller">Cacabeloscarmela@gmail.com</h5>
        </div>
        <div class="col">
          <p>Carrito: </p>
          <h3 class="bought-items">Ravioles de ricota</h3>
          <p class="bought-items description">
            Ravioles de ricota y verdura con salsa liviana
          </p>
          <p class="bought-items price">$ 1050</p>
          <br />
          <h3 class="bought-items">Coca Cola 2lts</h3>
          <p class="bought-items description">Coca Cola 2lts</p>
          <p class="bought-items price">$ 530</p>
          <br />
        </div>
        <p class="comprobe">
          Esta información se va a mandar a su correo electronico. ¡Gracias por su compra!
        </p>
      </div>
    </div>
  );
}

export default Pago;
