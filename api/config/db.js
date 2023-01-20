const Sequelize = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DB_NAME,
  // process.env.DB_USER || null,
  "postgres",
  // process.env.DB_PASS || null,
  "1234",
  {
    host: process.env.SERVIDOR,
    dialect: process.env.DB,
    logging: false,
  }
);

module.exports = db;
