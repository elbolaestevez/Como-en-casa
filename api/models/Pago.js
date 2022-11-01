const Sequelize = require("sequelize");
const db = require("../config/db");
//const bcrypt = require("bcrypt");

class Pago extends Sequelize.Model {}

Pago.init(
  {
    nombreTitula: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    numeroTarjeta: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Vencimiento: {
      type: Sequelize.INTEGER,
    },
    codigoSeguridad: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "pago" }
);

module.exports = Pago;
