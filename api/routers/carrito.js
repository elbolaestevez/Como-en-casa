const express = require("express");
const router = express.Router();
const { Carrito, Users, Cartas } = require("../models");
const CarritoController = require("../controllers/CarritoController");
const validateAuth = require("../middleware/auth");

// me crea un producto en el carrito
router.post("/", CarritoController.postcarrito);
//me trae todos lo del carrito
router.get("/", CarritoController.getallcarrito);

// me trae el carrito de un usuario

router.get("/:email", validateAuth, CarritoController.getcarritouser);

//me elimina un producto del carrito

router.delete("/delete/:id", CarritoController.deletecarrito);

//eliminar todo el carrito de un usuario
router.delete(
  "/deleteall/:email",
  validateAuth,
  CarritoController.deleteallcarritouser
);
module.exports = router;
