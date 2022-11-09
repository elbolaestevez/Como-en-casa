const Sequelize = require("sequelize");
const db = require("../config/db");

class Comentarios extends Sequelize.Model {}

Comentarios.init(
  {
    comentarios: { type: Sequelize.STRING },
    puntaje: { type: Sequelize.FLOAT, defaultValue: 0 },
  },
  { sequelize: db, modelName: "comentarios" }
);
module.exports = Comentarios;
