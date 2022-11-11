const express = require("express");
const router = express.Router();
const { Cartas } = require("../models");
const CartasController = require("../controllers/CartasController");
const validateAuth = require("../middleware/auth");

//creo producto
router.post("/", CartasController.postcarta);

//me trae todos los productos
router.get("/", CartasController.getallcartas);

//me trae un producto
router.get("/:id", CartasController.getonecarta);

//me edita un producto
router.put("/:id", validateAuth, CartasController.editonecarta);

//me elimina un producto
router.delete("/:id", validateAuth, CartasController.deleteonecarta);

module.exports = router;
