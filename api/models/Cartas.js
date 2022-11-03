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
    comentarios: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [],
      set: function (comentarios1) {
        if (typeof comentarios1 === "string") {
          comentarios1 = [comentarios1];
        }

        this.setDataValue("comentarios", comentarios1);
      },
    },
    stock: {
      type: Sequelize.INTEGER,
      defaultValue: 50,
    },
    contador: { type: Sequelize.INTEGER, defaultValue: 0 },
  },
  { sequelize: db, modelName: "cartas" }
);

module.exports = Cartas;
