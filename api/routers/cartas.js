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

router.get("/:name", (req, res) => {
  Cartas.findOne({
    where: { nombre: req.params.name },
  })
    .then((producto) => res.status(200).send(producto))
    .catch((err) => res.status(400).send(err));
});
router.put("/:id", (req, res) => {
  const id = req.params.id;
  Cartas.findByPk(id)
    .then((producto) => producto.update(req.body))
    .then((productoUpdated) => res.send(productoUpdated))
    .catch((err) => res.status(400).send(err));
});
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Cartas.destroy({ where: { id } })
    .then(() => res.send("Producto eliminado"))
    .catch((err) => res.status(400).send(err));
});

//editar comentario
router.put("/comentarios/:id", (req, res) => {
  const id = req.params.id;

  Cartas.findByPk(id)
    .then((producto) =>
      producto.update({
        comentarios: [...producto.comentarios, req.body.comentarios],
      })
    )
    .then((productoUpdated) => res.send(productoUpdated))
    .catch((err) => res.status(400).send(err));
});

//editar puntaje
router.put("/puntaje/:id", (req, res) => {
  const id = req.params.id;

  Cartas.findByPk(id)
    .then((producto) =>
      producto.update({
        puntaje: (producto.puntaje + req.body.puntaje) / producto.contador,
        contador: producto.contador + 1,
      })
    )

    .then((productoUpdated) => res.send(productoUpdated))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
