const express = require("express");
const router = express.Router();
const cartas = require("./cartas");
const users = require("./users");
const carrito = require("./carrito");
router.use("/cartas", cartas);
router.use("/users", users);
router.use("/carrito", carrito);

module.exports = router;
