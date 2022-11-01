const Sequelize = require("sequelize");
const db = require("../config/db");
//const bcrypt = require("bcrypt");

class Admins extends Sequelize.Model {}

Admins.init({}, { sequelize: db, modelName: "admins" });

module.exports = Admins;
