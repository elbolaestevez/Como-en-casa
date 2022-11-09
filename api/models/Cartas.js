const Sequelize = require("sequelize");
const db = require("../config/db");
//const bcrypt = require("bcrypt");

class Cartas extends Sequelize.Model {}

Cartas.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descripcion: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    precio: {
      type: Sequelize.FLOAT,
    },
    imagen: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
    },
    puntaje: { type: Sequelize.FLOAT, defaultValue: 0 },
    contador: { type: Sequelize.INTEGER, defaultValue: 0 },
    stock: {
      type: Sequelize.INTEGER,
      defaultValue: 50,
    },
  },
  { sequelize: db, modelName: "cartas" }
);

module.exports = Cartas;
