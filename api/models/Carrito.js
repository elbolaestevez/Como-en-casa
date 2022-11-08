const Sequelize = require("sequelize");
const db = require("../config/db");
//const bcrypt = require("bcrypt");

class Carrito extends Sequelize.Model {}

Carrito.init(
  {
    detalle: {
      type: Sequelize.STRING,
    },
    comprado: {
      type: Sequelize.BOOLEAN,
    },
  },
  { sequelize: db, modelName: "carrito" }
);

module.exports = Carrito;
