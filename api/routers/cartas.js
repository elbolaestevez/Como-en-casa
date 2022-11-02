const express = require("express");
const router = express.Router();
const { Cartas } = require("../models");

router.post("/", (req, res) => {
  const producto = req.body;

  Cartas.create(producto)

    .then((productofinal) => {
      res.status(201).send(productofinal);
    })
    .catch((err) => console.log(err));
});

router.get("/", (req, res) => {
  Cartas.findAll()
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
