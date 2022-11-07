const express = require("express");
const router = express.Router();
const { Cartas } = require("../models");
const CartasController = require("../controllers/CartasController");

router.post("/", CartasController.postcarta);

router.get("/", CartasController.getallcartas);

router.get("/:id", CartasController.getonecarta);

router.put("/:id", CartasController.editonecarta);

router.delete("/:id", CartasController.deleteonecarta);

module.exports = router;
