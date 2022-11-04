const Sequelize = require("sequelize");
const db = require("../config/db");
//const bcrypt = require("bcrypt");

class Pedido extends Sequelize.Model {}

Pedido.init({}, { sequelize: db, modelName: "pedido" });

module.exports = Pedido;
