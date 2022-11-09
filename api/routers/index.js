const express = require("express");
const router = express.Router();
const cartas = require("./cartas");
const users = require("./users");
const carrito = require("./carrito");
const comentario = require("./comentarios");
const pedido = require("./pedido");
router.use("/cartas", cartas);
router.use("/users", users);
router.use("/carrito", carrito);
router.use("/comentarios", comentario);
router.use("/pedido", pedido);

module.exports = router;
