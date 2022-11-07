const Sequelize = require("sequelize");
const db = require("../config/db");
//const bcrypt = require("bcrypt");

class Pedido extends Sequelize.Model {}

Pedido.init(
  {
    detalle: {
      type: Sequelize.STRING,
    },
    comprado: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
  },
  { sequelize: db, modelName: "pedido" }
);

module.exports = Pedido;
