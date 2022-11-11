const { INTEGER } = require("sequelize");
const Sequelize = require("sequelize");
const db = require("../config/db");
//const bcrypt = require("bcrypt");

class Pedido extends Sequelize.Model {}

Pedido.init(
  {
    detalle: {
      type: Sequelize.STRING,
    },

    // idcomprado: {
    //   type: Sequelize.ARRAY(INTEGER),
    // },
    idpedido: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: "pedido" }
);

module.exports = Pedido;
