

const express = require("express");
const router = express.Router();
const cartas = require("./cartas");
const users = require("./users");
router.use("/cartas", cartas);
router.use("/users", users);


module.exports = router;
