const Sequelize = require("sequelize");
const db = require("../config/db");
//const bcrypt = require("bcrypt");

class Users extends Sequelize.Model {}

Users.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    direccion: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefono: {
      type: Sequelize.INTEGER,
    },
    contraseña: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    acumulado: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    tipo: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "users" }
);

module.exports = Users;
