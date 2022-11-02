const express = require("express");
const router = express.Router();
const cartas = require("./cartas");

router.use("/cartas", cartas);

module.exports = router;
